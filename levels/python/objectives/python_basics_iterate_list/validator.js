const path = require("path");
const {
  NiceError,
  executeScript,
  checkSetup,
  writeFile,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      "list_iteration.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = ["Duke", "Ruby", "Dottie", "Snake", "Joe"];

    // Execute the player's script just to ensure it executes successfully
    const stdout = await executeScript(py, programPath, ARGS);

    // Loop through each line of the output and ensure it has the right stuff
    const lines = stdout.split("\n");
    let found = 0;
    async function fail(name, place) {
      await writeFile(programPath, "output.txt", ARGS, stdout);

      throw new NiceError(`
        It looks like your list output was a bit off - in the input we gave you,
        the name "<span class="highlight">${name}</span>" was supposed to be 
        printed with a <span class="highlight">${place}</span> prepended.
        <br/><br/>
        Check <em>output.txt</em> in your code folder for more info on what
        we passed in, and what your script gave us in return.
      `);
    }
    for (let i = 0, l = lines.length; i < l; i++) {
      const line = lines[i];
      if (line.indexOf("Duke") >= 0) {
        found++;
        if (line.indexOf("1") < 0) {
          await fail("Duke", "1");
        }
      } else if (line.indexOf("Ruby") >= 0) {
        found++;
        if (line.indexOf("2") < 0) {
          await fail("Ruby", "2");
        }
      } else if (line.indexOf("Dottie") >= 0) {
        found++;
        if (line.indexOf("3") < 0) {
          await fail("Dottie", "3");
        }
      } else if (line.indexOf("Snake") >= 0) {
        found++;
        if (line.indexOf("4") < 0) {
          await fail("Snake", "4");
        }
      } else if (line.indexOf("Joe") >= 0) {
        found++;
        if (line.indexOf("5") < 0) {
          await fail("Joe", "5");
        }
      }
    }

    // Check that all five were printed
    if (found !== 5) {
      throw new NiceError(`
        We didn't see the five names we gave you in the printed output. Make
        sure your script prints every name passed in as arguments, prepended
        with their place in line (starting at 1).
      `);
    }

    // If we make it this far, we've passed validation
    helper.success(`
      Excellent! You have passed the <em>Trial of Iteration</em>.
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
