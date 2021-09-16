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
      throw new NiceError(`
        With the test input we gave your script, it should have printed out
        at least four lines. There are ${lines.length} lines in your script's 
        output.
      `);
    }

    const l1 = lines[0].trim();
    if (l1 !== "fizzbuzz") {
      throw new NiceError(`
        We passed your script a number that was divisible by both 3 and 5, and
        expected you to print <em>fizzbuzz</em>, but instead you printed
        <em>${l1}</em>.
      `);
    }

    const l2 = lines[1].trim();
    if (l2 !== "7") {
      throw new NiceError(`
        We passed your script the number <em>7</em> which is divisible by 
        neither 3 or 5, and expected you to print the number. Instead, you 
        printed <em>${l2}</em>.
      `);
    }

    const l3 = lines[2].trim();
    if (l3 !== "fizz") {
      throw new NiceError(`
        We passed your script a number that was divisible by 3 but not 5, and
        expected you to print <em>fizz</em>, but instead you printed
        <em>${l3}</em>.
      `);
    }

    const l4 = lines[3].trim();
    if (l4 !== "buzz") {
      throw new NiceError(`
        We passed your script a number that was divisible by 5 but not 3, and
        expected you to print <em>buzz</em>, but instead you printed
        <em>${l4}</em>.
      `);
    }

    // If we make it this far, we've passed validation
    helper.success(`
      Congratulations! You have passed the <em>Trial of Trickery</em>.
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
