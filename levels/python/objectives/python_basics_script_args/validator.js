const path = require("path");
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
      "collect_input.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Execute the player's script and capture the output
    const stdout = await executeScript(py, programPath, [
      "salad",
      "christmas",
      "cherry soda",
    ]);
    console.log(stdout);

    // Check for inputs in stdout
    if (
      stdout.indexOf("salad") < 0 ||
      stdout.indexOf("christmas") < 0 ||
      stdout.indexOf("cherry soda") < 0
    ) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_script_args.threeArguments'));
    }

    // If we made it here we're good!
    helper.success(helper.world.getTranslatedString('python.python_basics_script_args.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
