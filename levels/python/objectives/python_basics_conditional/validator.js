const path = require('path');
const jetpack = require('fs-jetpack');
const { 
  NiceError, 
  executeScript, 
  checkSetup
} = require('../../validation');

module.exports = async helper => {
  try {
    const py = helper.env.TQ_PYTHON_EXE;
    const programPath = path.join(
      helper.env.TQ_PYTHON_CODE_PATH,
      'branching.py'
    );

    // Ensure prerequisite stuff is set up
    await checkSetup(py, programPath);

    let stdout = '';

    // Test for zero
    stdout = await executeScript(py, programPath, ['-1', '1']);
    if (stdout.indexOf('destitution') < 0) {
      throw new NiceError(`
        When the sum of the input numbers is zero or less, you should print the
        message: <em>You have chosen the path of destitution.</em>
      `);
    }

    // Test negative
    stdout = await executeScript(py, programPath, ['-10', '1']);
    if (stdout.indexOf('destitution') < 0) {
      throw new NiceError(`
        When the sum of the input numbers is zero or less, you should print the
        message: <em>You have chosen the path of destitution.</em>
      `);
    }

    // Test 1 - 100
    stdout = await executeScript(py, programPath, ['50', '50']);
    if (stdout.indexOf('plenty') < 0) {
      throw new NiceError(`
        When the sum of the input numbers is 1 to 100, you should print the
        message: <em>You have chosen the path of plenty.</em>
      `);
    }

    // Test 101+
    stdout = await executeScript(py, programPath, ['50', '51']);
    if (stdout.indexOf('excess') < 0) {
      throw new NiceError(`
        When the sum of the input numbers is greater than 100, you should print the
        message: <em>You have chosen the path of excess.</em>
      `);
    }

    // If we make it this far, we've passed validation
    helper.success(`
      You have passed the <em>Trial of Branching Paths</em>!
    `);
  } catch (e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't successfully run your Python script.
      `);
    }
  }
};
