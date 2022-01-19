const path = require("path");
const jetpack = require("fs-jetpack");
const {
  NiceError,
  executeScript,
  checkSetup,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      "branching.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    let stdout = "";

    // Test for zero
    stdout = await executeScript(py, programPath, ["-1", "1"]);
    if (stdout.indexOf("destitution") < 0) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_conditional.sumIsZero'));
    }

    // Test negative
    stdout = await executeScript(py, programPath, ["-10", "1"]);
    if (stdout.indexOf("destitution") < 0) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_conditional.sumIsZero'));
    }

    // Test 1 - 100
    stdout = await executeScript(py, programPath, ["50", "50"]);
    if (stdout.indexOf("plenty") < 0) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_conditional.sumIs1To100'));
    }

    // Test 101+
    stdout = await executeScript(py, programPath, ["50", "51"]);
    if (stdout.indexOf("excess") < 0) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_conditional.sumIsGreaterThan100'));
    }

    // If we make it this far, we've passed validation
    helper.success(helper.world.getTranslatedString('python.python_basics_conditional.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
