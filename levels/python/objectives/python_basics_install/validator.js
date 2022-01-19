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
          helper.fail(helper.world.getTranslatedString('python.python_basics_install.python3', { versionString }));
          return;
        }

        helper.success(
          helper.fail(helper.world.getTranslatedString('python.python_basics_install.success', { versionString })),
          [{ name: 'PYTHON_EXE', value: pythonPath }]
        );
      } else {
        helper.fail(helper.fail(helper.world.getTranslatedString('python.python_basics_install.validatingPathError', { code, signal  })));
      }
    });
  } catch (e) {
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(helper.fail(helper.world.getTranslatedString('python.python_basics_install.couldntValidate', { e  })));
    }
  }
};
