const path = require("path");
const jetpack = require("fs-jetpack");
const {
  NiceError,
  executeScript,
  checkSetup,
  executePythonCode,
} = require("../../../../scripts/objectiveValidation");

// Append this python code to the user-created code - it will execute and
// validate that the user's script did what we expected
const VALIDATION_PYTHON_CODE = `
from inspect import signature

# Validate variables have been declared
assert 'hail_friend' in locals(), "The 'hail_friend' function was not created."

# Assert hail_friend is a function
assert callable(hail_friend), "hail_friend is not a callable function."

# Check function signature
sig = signature(hail_friend)
assert len(sig.parameters) == 1, "hail_friend should take one parameter."

# Call the function so we can inspect stdout
hail_friend('Dio Brando')
`;

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      "functions.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = ["Dio Brando"];

    // Execute the player's script to ensure it runs
    const stdout = await executeScript(py, programPath, ARGS);
    console.log(stdout);

    // Now, do an assertion check of the code with our own python code appended
    const code = await jetpack.readAsync(programPath);
    const testCode = `${code}\n\n${VALIDATION_PYTHON_CODE}`;

    const testResult = await executePythonCode(helper.env, testCode, ARGS);
    console.log(testResult);
    if (testResult.exitCode !== 0) {
      if (testResult.stderr.indexOf("AssertionError:") > 0) {
        const assertionText = testResult.stderr.split("AssertionError:")[1];
        throw new NiceError(`
          Looks like there's a small problem. ${assertionText}
        `);
      } else {
        throw new NiceError(`
          We couldn't validate your Python code - please try again.
        `);
      }
    } else if (testResult.stdout.indexOf("Dio Brando") < 0) {
      // It should contain the argument we passed to the function
      throw new NiceError(`
        We didn't see the string we passed as an argument printed to the
        console. Does your function include a 
        <span class="highlight">print</span> statement that uses
        the argument's value?
      `);
    }

    // If we make it this far, we've passed validation
    helper.success(`
      Well played - your arguments, as always, are on point. You have passed
      the <em>Trial of Persuasive Arguments</em>.
    `);
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't successfully run your Python script.
      `);
    }
  }
};
