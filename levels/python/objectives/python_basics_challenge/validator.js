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
import inspect

# Validate class has been declared
assert 'Citizen' in locals(), "The 'Citizen' class has not been created."

# Validate it is a class
assert inspect.isclass(Citizen), "'Citizen' is not a class."

# Assert functionality
assert Citizen.__doc__, "'Citizen' does not have a docstring."
assert Citizen.greeting == "For the glory of Python!", "'Citizen' does not have a 'greeting' class property set to the correct value."

# Attempt to create an instance
try:
  c = Citizen('Dio', 'Brando')
except:
  assert False, "Could not create an object with a two argument init function."

c = Citizen('Dio', 'Brando')
assert c.first_name == 'Dio', "First name instance variable was not set correctly."
assert c.last_name == 'Brando', "Last name instance variable was not set correctly."

assert callable(c.full_name), "full_name instance method was not created."
assert c.full_name() == "Dio Brando", "The full_name instance method does not work as expected."

`;

module.exports = async helper => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      'citizen.py'
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = [];

    // Execute the player's script just to ensure it executes successfully
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
      Well done! With minimal guidance, you created a Python class and claimed
      the reward for this challenge.
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
