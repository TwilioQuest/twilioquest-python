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
      "fizzbuzz.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Test a sequence of numbers
    const stdout = await executeScript(py, programPath, [
      "-3000",
      "7",
      "6",
      "100",
    ]);
    const lines = stdout.split("\n");

    if (lines.length < 4) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_fizzbuzz.fourLines', { linesLength: lines.length }));
    }

    const l1 = lines[0].trim();
    if (l1 !== "fizzbuzz") {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_fizzbuzz.divisible3And5', { l1 }));
    }

    const l2 = lines[1].trim();
    if (l2 !== "7") {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_fizzbuzz.seven', { l2 }));
    }

    const l3 = lines[2].trim();
    if (l3 !== "fizz") {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_fizzbuzz.divisible3ButNot5', { l3 }));
    }

    const l4 = lines[3].trim();
    if (l4 !== "buzz") {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_fizzbuzz.divisible5ButNot3', { l4 }));
    }

    // If we make it this far, we've passed validation
    helper.success(helper.world.getTranslatedString('python.python_basics_fizzbuzz.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
