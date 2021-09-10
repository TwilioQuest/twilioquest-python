const path = require('path');
const jetpack = require('fs-jetpack');
const { 
  NiceError, 
  executeScript, 
  checkSetup,
  executePythonCode 
} = require('../../validation');

// Append this python code to the user-created code - it will execute and
// validate that the user's script did what we expected
const VALIDATION_PYTHON_CODE = `
from inspect import signature

# Validate variables have been declared
assert 'add_numbers' in locals(), "The 'add_numbers' function was not created."

# Assert add_numbers is a function
assert callable(add_numbers), "add_numbers is not a callable function."

# Check function signature
sig = signature(add_numbers)
assert len(sig.parameters) == 2, "add_numbers should take two parameters."

# Check functionality
result_sum = add_numbers(3, 4)
assert result_sum == 7, "The add_numbers function does not appear to add the two arguments and return the sum of the numbers."
`;

module.exports = async helper => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      'functions.py'
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = [];

    // Execute the player's script to ensure it runs
    const stdout = await executeScript(py, programPath, ARGS);
    console.log(stdout);

    // Now, do an assertion check of the code with our own python code appended
    const code = await jetpack.readAsync(programPath);
    const testCode = `${code}\n\n${VALIDATION_PYTHON_CODE}`;
    
    const testResult = await executePythonCode(helper.env, testCode, ARGS);
    console.log(testResult);
    if (testResult.exitCode !== 0) {
      if (testResult.stderr.indexOf('AssertionError:') > 0) {
        const assertionText = testResult.stderr.split('AssertionError:')[1];
        throw new NiceError(`
          Looks like there's a small problem. ${assertionText}
        `);
      } else {
        throw new NiceError(`
          We couldn't validate your Python code - please try again.
        `);
      }
    }

    // If we make it this far, we've passed validation
    helper.success(`
      Don't call it a comeback! You just passed the <em>Trial of Return</em>.
    `);
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't successfully run your Python script.
      `);
    }
  }
};
