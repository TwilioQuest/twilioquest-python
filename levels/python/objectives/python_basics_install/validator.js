const { spawn } = require('child_process');

module.exports = async helper => {
  try {
    const { pythonPath } = helper.validationFields;

    const args = ['--version'];
    const [isExecutableValid, errorMessage] = await helper.isExecutableValid(
      pythonPath,
      args
    );

    if (!isExecutableValid) {
      helper.fail(errorMessage);
      return;
    }

    const pyv = spawn(pythonPath, args);
    let versionString = '';

    pyv.stdout.on('data', data => {
      versionString += `${data}`;
    });

    // Python 2 prints version information to stderr.
    // https://stackoverflow.com/questions/26028416/why-does-python-print-version-info-to-stderr
    // We want to capture this in case users mistakenly try
    // to use Python 2.
    pyv.stderr.on('data', data => {
      versionString += `${data}`;
    });

    pyv.on('close', (code, signal) => {
      if (code === 0) {
        const [version] = versionString.match(/(\d+\.\d+\.\d+)/);
        const [major, minor, patch] = version.split('.');

        if (major !== '3') {
          helper.fail(`
          It looks like you supplied <span class="highlight">${versionString}</span>. This mission requires <span class="highlight">Python 3</span>.
        `);
          return;
        }

        helper.success(
          `
          Awesome! Looks like you have this version installed: <br/>
          <span class="highlight">${versionString}</span>. You have completed
          the Trial of Installation!
        `,
          [{ name: 'PYTHON_EXE', value: pythonPath }]
        );
      } else {
        helper.fail(`
          Welp... something went wrong when we tried to validate this Python
          path. Double check the path and try again.

          Error code: ${code}
          Error signal: ${signal}
        `);
      }
    });
  } catch (e) {
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't validate your Python 3 installation. Please try
        again.

        ${e}
      `);
    }
  }
};
