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
assert 'meaning_of_life' in locals(), "The 'meaning_of_life' variable was not set."
assert 'favorite_robot' in locals(), "The 'favorite_robot' variable was not set."
assert meaning_of_life == 42, "The 'meaning_of_life' variable was not set to the number 42."
assert favorite_robot == "Cedric", "The 'favorite_robot' variable was not set to the string 'Cedric'."

`;

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      "variables.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Execute the player's script just to ensure it executes successfully
    const stdout = await executeScript(py, programPath);
    console.log(stdout);

    // Now, do an assertion check of the code with our own python code appended
    const code = await jetpack.readAsync(programPath);
    const testCode = `${code}\n\n${VALIDATION_PYTHON_CODE}`;

    const testResult = await executePythonCode(helper.env, testCode);
    console.log(testResult);
    if (testResult.exitCode !== 0) {
      if (testResult.stderr.indexOf("AssertionError:") > 0) {
        const assertionText = testResult.stderr.split("AssertionError:")[1];
        throw new NiceError(`
          Hmm, there was an issue with the code you submitted. ${assertionText}
        `);
      } else {
        throw new NiceError(`
          We couldn't validate your Python code - please try again.
        `);
      }
    }

    // If we make it this far, we've passed validation
    helper.success(`
      Excellent! You have learned the importance of naming your data, and have
      completed the <em>Trial of Naming</em>.
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
