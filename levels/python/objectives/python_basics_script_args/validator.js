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
      throw new NiceError(`
        When we executed your script, we passed in three arguments. However,
        we did not see those arguments printed in the output from your script.
        Double check that you are printing the values of 
        <span class="highlight">sys.argv[1]</span>, 
        <span class="highlight">sys.argv[2]</span>, and 
        <span class="highlight">sys.argv[3]</span> in your code.
      `);
    }

    // If we made it here we're good!
    helper.success(`
      Well done! Passing arguments in to your Python code is a trick you'll use
      again and again. Congratulations on completing the <em>Trial of Solicited
      Input</em>.
    `);
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't validate your Python code. Please try again.
      `);
    }
  }
};
