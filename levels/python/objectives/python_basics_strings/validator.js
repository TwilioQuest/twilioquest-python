const path = require("path");
const {
  NiceError,
  executeScript,
  checkSetup,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(helper.env.TQ_PYTHON_CODE_PATH, "strings.py");

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = ["i am so stoked"];

    // Execute the player's script just to ensure it executes successfully
    const stdout = await executeScript(py, programPath, ARGS);
    console.log(stdout);

    // Check the output for the target string
    if (stdout.indexOf("I AM SO STOKED!!!") < 0) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_strings.codeNotStoked'));
    }

    // If we make it this far, we've passed validation
    helper.success(helper.world.getTranslatedString('python.python_basics_strings.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
