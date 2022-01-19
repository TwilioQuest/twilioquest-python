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
assert 'order_of_succession' in locals(), "The 'order_of_succession' variable was not set."

# Assert length is correct
assert len(order_of_succession) == 5, "There should be five items in the list."

# Validate values
assert order_of_succession[0] == 'Isabelle', "The first item in the list should be 'Isabelle'."
assert order_of_succession[1] == 'Grace', "The second item in the list should be 'Grace'."
assert order_of_succession[2] == 'Charlotte', "The third item in the list should be 'Charlotte'."
assert order_of_succession[3] == 'LeBron', "The fourth item in the list should be 'LeBron'."
assert order_of_succession[4] == 'Steve', "The fifth item in the list should be 'Steve'."
`;

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(helper.env.TQ_PYTHON_CODE_PATH, "lists.py");

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = [];

    // Execute the player's script just to ensure it executes successfully
    const stdout = await executeScript(py, programPath, ARGS);

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
    }

    // If we make it this far, we've passed validation
    helper.success(helper.world.getTranslatedString('python.python_basics_lists.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
