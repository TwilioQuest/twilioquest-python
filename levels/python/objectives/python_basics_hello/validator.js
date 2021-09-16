const path = require("path");
const jetpack = require("fs-jetpack");
const {
  NiceError,
  executeScript,
} = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { programPath } = helper.validationFields;

    if (!programPath) {
      throw new NiceError(`
        Please provide a path to your Python script - e.g. C:\\code\\salutation.py
      `);
    }

    const exists = await jetpack.existsAsync(programPath);
    if (!exists) {
      throw new NiceError(`
        We couldn't find a file at the path you provided. Please double check
        that the file path you pasted in the test field is correct.
      `);
    }

    const stdout = await executeScript(helper.env.TQ_PYTHON_EXE, programPath);
    console.log(stdout);

    helper.success(
      `
      Great work! You have completed the Trial of Salutation. Write the code
      for future challenges in the same folder as this file.
      <br/><br/>
      <span class="highlight"><em>For the glory of Python!</em></span>
    `,
      [{ name: "PYTHON_CODE_PATH", value: path.dirname(programPath) }]
    );
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
