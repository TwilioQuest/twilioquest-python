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
      throw new NiceError(`
        You haven't yet found all the clues necessary to solve this puzzle.
        Keep searching the chamber to find them!
      `);
    }

    if (!puzzleAnswer) {
      throw new NiceError(`
        Please submit an answer - you are looking for a five-letter word inside
        the puzzle!
      `);
    }

    // Check if the answer submitted is in the list of acceptable answers
    if (!ANSWERS.includes(puzzleAnswer.toLowerCase())) {
      throw new NiceError(`
        Hmmm, the answer you submitted is not one of the five-letter words in
        the puzzle. Check the "Help" section again - it now contains
        further assistance on how to solve the puzzle.
      `);
    }

    // We got it!
    helper.success(`
      That's right! "${puzzleAnswer}" is one of the five-letter words in the
      puzzle. You have proven yourself worthy of citizenship in the City of
      Python!
    `);
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't validate your puzzle answer. Please try again.
      `);
    }
  }
};
