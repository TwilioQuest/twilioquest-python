const path = require("path");
const jetpack = require("fs-jetpack");
const {
  NiceError,
  executeScript,
  checkSetup,
  executePythonCode,
} = require("../../../../scripts/objectiveValidation");

// Append this python code to the user-created code - it will execute and
// validate that the user's script did what we expected
const VALIDATION_PYTHON_CODE = `

# Validate variables have been declared
assert 'super_hero' in locals(), "The 'super_hero' variable was not set."

# Assert correct keys exist
assert 'name' in super_hero, "The dictionary super_hero doesn't have a key 'name'"
assert 'hero_name' in super_hero, "The dictionary super_hero doesn't have a key 'hero_name'"
assert 'power_level' in super_hero, "The dictionary super_hero doesn't have a key 'power_level'"

# Validate values
assert super_hero['name'] == "Miles Morales", "super_hero['name'] should be 'Miles Morales'"
assert super_hero['hero_name'] == "Spider-Man", "super_hero['hero_name'] should be 'Spider-Man'"
assert super_hero['power_level'] == 9999, "super_hero['power_level'] should be 9999"
`;

module.exports = async (helper) => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      "dictionaries.py"
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    // Our test args
    const ARGS = [];

    // Execute the player's script just to ensure it executes successfully
    const stdout = await executeScript(py, programPath, ARGS);
    console.log(stdout);

    // Now, do an assertion check of the code with our own python code appended
    const code = await jetpack.readAsync(programPath);
    const testCode = `${code}\n\n${VALIDATION_PYTHON_CODE}`;

    const testResult = await executePythonCode(helper.env, testCode, ARGS);
    console.log(testResult);
    if (testResult.exitCode !== 0) {
      if (testResult.stderr.indexOf("AssertionError:") > 0) {
        const assertionText = testResult.stderr.split("AssertionError:")[1];
        throw new NiceError(`
          Looks like there's a small problem. ${assertionText}
        `);
      } else {
        throw new NiceError(`
          We couldn't validate your Python code - please try again.
        `);
      }
    }

    // If we make it this far, we've passed validation
    helper.success(`
      Thwip thwip! Way to sling those dictionaries, hero. You've passed the 
      <em>Trial of Myriad Properties</em>.
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
