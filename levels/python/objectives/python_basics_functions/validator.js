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

# Validate variables have been declared
assert 'hail_friend' in locals(), "The 'hail_friend' function was not created."

# Assert hail_friend is a function
assert callable(hail_friend), "hail_friend is not a callable function."

# Call the function so we can inspect stdout
hail_friend()
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
      if (testResult.stderr.indexOf("AssertionError:") > 0) {
        const assertionText = testResult.stderr.split("AssertionError:")[1];
        throw new NiceError(helper.world.getTranslatedString('python.validators.smallProblem', { assertionText }));
      } else {
        throw new NiceError(helper.world.getTranslatedString('python.validators.tryAgain'));
      }
    } else if (testResult.stdout.toLowerCase().indexOf("hail, friend") < 0) {
      // It should contain the text "hail, friend"
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_functions.didntSee'));
    }

    // If we make it this far, we've passed validation
    helper.success(helper.world.getTranslatedString('python.python_basics_functions.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
