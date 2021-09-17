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
      throw new NiceError(`
        It looks like your code is not quite stoked enough yet. Make sure to:
        <br/>
        - Transform the input string to <span class="highlight">all caps</span></br>
        - Append <span class="highlight">three exclamation points</span> to the end</br>
        - <span class="highlight">print()</span> the resulting transformed string
      `);
    }

    // If we make it this far, we've passed validation
    helper.success(`
      EXCELLENT!!! You have completed the <em>Trial of Words</em>.
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
