const { NiceError } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { cityName, resultNumber } = helper.validationFields;

    if (!cityName || !resultNumber) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_repl.enterAnswer'));
    }

    if (cityName.toLowerCase().indexOf("amsterdam") < 0) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_repl.notTheCity'));
    }

    const rn = resultNumber.trim();
    const tn = Number(rn);
    if (!tn || tn !== 8) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_repl.mathProblem'));
    }

    helper.success(helper.world.getTranslatedString('python.python_basics_repl.success'));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
