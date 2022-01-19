const path = require("path");
const jetpack = require("fs-jetpack");
const {
  NiceError,
  executeScript,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { programPath } = helper.validationFields;

    if (!programPath) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_hello.path'));
    }

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_hello.file'));
    }

    const stdout = await executeScript(helper.env.TQ_PYTHON_EXE, programPath);
    console.log(stdout);

    helper.success(
      helper.world.getTranslatedString('python.python_basics_hello.success'),
      [{ name: "PYTHON_CODE_PATH", value: path.dirname(programPath) }]
    );
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
