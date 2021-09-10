# Toledo's Trial Notes

As you prepare to tackle the Trial of Installation, you notice another page of Toledo's daily journal lying nearby. It doesn't contain any information related to the Staff or the puzzle, but it does seem to have some relevant information about the current trial.

<blockquote>
January 24th, 2016

<hr/>

<p>
It looks like my instincts were correct. To make progress through the ritual chamber, I will have to complete the same Trials of Citizenship that the first Pythonistas did before they could become citizens in the City of Python.
</p>

<p>
The first trial asks me to install Python on my computer - easy peasy! A download and a few clicks, and I should be all set. After I get it installed, I just need to paste in the full path to the <code>python3</code> executable on my computer. The <code>python3</code> command is what I will use in a Terminal window to execute the Python code that I write for the trials.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

Looking through the rest of the journal entry, you find some possibly useful tips on how to complete this trial.

<details>
<summary>How do I download and install Python 3?</summary>

On Windows, we __highly__ recommend installing Python 3 through the [Windows Store](https://www.microsoft.com/en-us/p/python-37/9nj46sx7x90p) - this handles setting up the `python3` command on your system path and other helpful bits.

For other systems, there are [downloads on the python.org website](https://www.python.org/downloads/). As of this writing, the most recent version of Python is `3.7.4`. For Mac, there are graphical installers you can download that should walk you through the installation process.
</details>

<details>
<summary>How do I execute commands in a "terminal"?</summary>

We will sometimes use "terminal" and "command line interface" interchangeably - a terminal is an application on your computer that allows you to tell your computer to do things by typing in commands. 

On Windows, we recommend using [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6). On Mac, we recommend using the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app. If you are a Linux user, your terminal application will vary based on the flavor of Linux you are using.

When you write Python code for TwilioQuest, you will execute that code using this terminal application. The trials should contain notes on where and how to run commands in the terminal.
</details>

<details>
<summary>How do I find the path where `python3` is installed?</summary>

To confirm you have the `python3` command available in your terminal, start by typing in the following command:

```bash
python3 --version
```

This would print out the current version of Python 3 you have installed. If you can do the above, you're all set to run some Python code! To check where the command was installed (and __complete this objective__), you can use this command on Mac and Linux:

```bash
which python3
```

This will print out a path on your computer (a series of folders) where the installer put the `python3` command. Copy this entire string into the text field on the right and click *HACK*. On a Mac, the path could look something like this:

`/Library/Frameworks/Python.framework/Versions/3.7/bin/python3`

On a PC, the process is slightly different. In PowerShell, run the following command:

```bash
 Get-Command python3.exe | Select-Object -ExpandProperty Definition
```

The full path to your `python3` executable should be in the output of this command. On a PC, the path will look something like this:

`C:\Users\susan\AppData\Local\Microsoft\WindowsApps\python3.exe`

</details>

<details>
<summary>I already have Python 2, is that okay? SPOILER: No, it isn't :(</summary>

Exercises in TwilioQuest will assume that you are using Python 3, so you should install Python 3 to complete the related exercises. There are [many differences between Python 2 and 3](https://www.fullstackpython.com/python-2-or-3.html), and TwilioQuest will demonstrate language features that will not work in Python 2. If you are learning Python for the first time, you should only worry about learning Python 3.

</details>
