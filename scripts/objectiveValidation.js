const { spawn } = require("child_process");
const path = require("path");
const { remote } = require("electron");
const jetpack = require("fs-jetpack");

const appDataPath = path.resolve(remote.app.getPath("appData"), "TwilioQuest");

// Create a directory to house our python code validator
const pythonValidatorPath = path.join(appDataPath, "python_validator");
const pythonValidatorCodePath = path.join(pythonValidatorPath, "validate.py");
jetpack.dir(pythonValidatorPath);

// An error wrapper we can assume to have a nice human readable error message
class NiceError extends Error {
  constructor(message) {
    super(message);
    this.name = "NiceError";
  }
}

// Helper to double check both the python EXE and code path for validation
async function checkSetup(py, programPath) {
  const programExists = await jetpack.existsAsync(programPath);
  if (!programExists) {
    throw new NiceError(`
      Whoops! This trial asked you to create a file at this location:<br/>
      <em style="display:block;padding:5px;overflow-wrap:break-word;">
      ${programPath}</em>
      However, this file doesn't exist at that location - please write your code
      in this file. If you need to change 
      the location of the code folder, go to the 
      Settings UI ("O" key) and under "Variables", change "TQ_PYTHON_CODE_PATH" 
      to a different folder.
    `);
  }

  // Naive check for the Python EXE
  if (!py) {
    throw new NiceError(`
      It looks like you don't have a Python executable path saved in your game
      configuration. Go back to the very first barrier of this area and repeat
      that challenge. It will set up your Python executable for you.
    `);
  }
}

// Execute a Python program at the path provided and capture the output
function executeScript(pythonPath, codePath, args = []) {
  return new Promise(async (resolve, reject) => {
    const process = spawn(pythonPath, [codePath].concat(args));
    let finished = false;
    let bufferedStdout = "";
    let bufferedStderr = "";

    process.on("error", (e) => {
      reject(e);
    });

    process.stdout.on("data", (data) => {
      bufferedStdout += `${data}`;
    });

    process.stderr.on("data", (data) => {
      bufferedStderr += `${data}`;
    });

    process.on("close", async (code) => {
      if (code === 0) {
        resolve(bufferedStdout);
      } else {
        const err = new NiceError(`
          We tried executing your code, but we encountered an error. In the same
          directory as your script, look for a file called 
          <span class="highlight">error.txt</span>. It will
          contain further details about the error we saw.
        `);
        err.bufferedStderr = bufferedStderr;
        console.error(bufferedStderr);

        // Write error file
        await writeFile(codePath, "error.txt", args, bufferedStderr);
        reject(err);
      }
      finished = true;
    });

    setTimeout(() => {
      if (!finished) {
        reject(
          new NiceError(`
          Your script didn't return a response in time - we waited for five
          seconds, but it didn't finish executing in that time.
        `)
        );
      }
    }, 30000);
  });
}

// Helper to write script output to a file
async function writeFile(codePath, fileName, args, output) {
  const p = path.dirname(codePath);
  const t = path.join(p, fileName);
  const text =
    `Executing script: ${codePath}\n` +
    `Script arguments: ${args}\n` +
    `Output:\n${output}\n`;
  await jetpack.writeAsync(t, text);
}

// Execute the given chunk of validation Python code
async function executePythonCode(env, code, args = []) {
  const py = env.TQ_PYTHON_EXE;
  await jetpack.writeAsync(pythonValidatorCodePath, code);

  return new Promise(async (resolve, reject) => {
    const process = spawn(py, [pythonValidatorCodePath].concat(args));
    let finished = false;
    let bufferedStdout = "";
    let bufferedStderr = "";

    process.on("error", (e) => {
      reject(
        new NiceError(`
        There was a problem validating your Python code. Please try again.
      `)
      );
    });

    process.stdout.on("data", (data) => {
      bufferedStdout += `${data}`;
    });

    process.stderr.on("data", (data) => {
      bufferedStderr += `${data}`;
    });

    process.on("close", (code) => {
      finished = true;

      // We don't care about success or failure - let the validation code sort
      // that out
      resolve({
        exitCode: code,
        stdout: bufferedStdout,
        stderr: bufferedStderr,
      });
    });

    setTimeout(() => {
      if (!finished) {
        console.warn("Python validation code timed out.");
        reject(
          new NiceError(`
          There was a problem validating your Python code - please try again.
        `)
        );
      }
    }, 5000);
  });
}

// Export public interface
module.exports = {
  NiceError,
  executeScript,
  checkSetup,
  executePythonCode,
  writeFile,
};
