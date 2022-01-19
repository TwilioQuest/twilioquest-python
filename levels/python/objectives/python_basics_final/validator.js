const { NiceError } = require("../../../../scripts/objectiveValidation");

/*
The final puzzle board is:
r n o
a j s
p y f

The five letter words are:
sonar
pansy
yarns
*/
const ANSWERS = ["sonar", "pansy", "yarns"];

module.exports = async (helper) => {
  try {
    const { puzzleAnswer } = helper.validationFields;
    const { pythonWorldState } = helper.context.levelState;

    // The player needs to find all the clues first before attempting to solve
    // the puzzle
    if (!pythonWorldState.canSolvePuzzle) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_final.clues'));
    }

    if (!puzzleAnswer) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_final.pleaseSubmit'));
    }

    // Check if the answer submitted is in the list of acceptable answers
    if (!ANSWERS.includes(puzzleAnswer.toLowerCase())) {
      throw new NiceError(helper.world.getTranslatedString('python.python_basics_final.help'));
    }

    // We got it!
    helper.success(helper.world.getTranslatedString('python.python_basics_final.success', { puzzleAnswer }));
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(helper.world.getTranslatedString('python.validators.sorry'));
    }
  }
};
