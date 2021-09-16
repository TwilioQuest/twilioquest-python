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
const VALIDATION_PYTHON_CODE_SHARED = `

# Validate variables have been declared
assert 'python_is_glorious' in locals(), "The 'python_is_glorious' variable was not set."
assert 'failure_is_option' in locals(), "The 'failure_is_option' variable was not set."
assert 'proper_greeting' in locals(), "The 'proper_greeting' variable was not set."

# Validate values
assert python_is_glorious, "The variable python_is_glorious should be set to True"
assert not failure_is_option, "The variable failure_is_option should be set to False"
`;

const VALIDATION_CODE_WRONG_GREETING = `${VALIDATION_PYTHON_CODE_SHARED}
assert not proper_greeting, "The 'proper_greeting' variable should be False for the test input we gave you."
`;

const VALIDATION_CODE_CORRECT_GREETING = `${VALIDATION_PYTHON_CODE_SHARED}
assert proper_greeting, "The 'proper_greeting' variable should be True for the test input we gave you."
`;

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      "booleans.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Helper to process the results of different script tests
    function processTestRun(testResult) {
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
      }
    }

    // Our test args
    let ARGS = ["Python is glorious"];
    let testCode = "";
    let testResult = {};
    let userCode = await jetpack.readAsync(programPath);

    // First just ensure their script runs unchanged
    const stdout = await executeScript(py, programPath, ARGS);
    console.log(stdout);

    // Execute with incorrect argument
    ARGS = ["Python is super glorious!"];
    testCode = `${userCode}\n\n${VALIDATION_CODE_WRONG_GREETING}`;
    testResult = await executePythonCode(helper.env, testCode, ARGS);
    processTestRun(testResult);

    // Execute with correct argument
    ARGS = ["For the glory of Python!"];
    testCode = `${userCode}\n\n${VALIDATION_CODE_CORRECT_GREETING}`;
    testResult = await executePythonCode(helper.env, testCode, ARGS);
    processTestRun(testResult);

    // If we make it this far, we've passed validation
    helper.success(`
      You have passed the Trial of Truth. 
      <br/>
      <em><i>For the glory of Python!</i></em>
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
