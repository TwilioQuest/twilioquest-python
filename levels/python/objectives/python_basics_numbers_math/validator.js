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
assert 'result_sum' in locals(), "The 'result_sum' variable was not set."
assert 'result_difference' in locals(), "The 'result_difference' variable was not set."
assert 'result_product' in locals(), "The 'result_product' variable was not set."
assert 'result_quotient' in locals(), "The 'result_quotient' variable was not set."

# Validate values
assert result_sum == 20.0, "The 'result_sum' variable should be the sum of the two input numbers."
assert result_difference == 4.0, "The 'result_difference' variable should be the difference between the first argument and the second argument."
assert result_product == 96.0, "The 'result_product' variable should be the result of multiplying the two input numbers."
assert result_quotient == 1.5, "The 'result_quotient' variable should be the result of dividing the first input number by the second input number."
`;

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(helper.env.TQ_PYTHON_CODE_PATH, "numbers.py");

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = [12, 8];

    // Execute the player's script just to ensure it executes successfully
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
    }

    // If we make it this far, we've passed validation
    helper.success(helper.world.getTranslatedString('python.python_basics_numbers_math.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
