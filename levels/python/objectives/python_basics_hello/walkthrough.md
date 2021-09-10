# Toledo's Trial Notes
Another of Toledo Van Possum's journal entries is lying next to this barrier!

<blockquote>
February 1st, 2016

<hr/>

<p>
It stands to reason that one of the early citizenship trials would be the Trial of Salutation. "Hello World" is a universal first step in programming, where you write some code that outputs a simple message. The early Pythonistas did it using their traditional greeting - <b>"For the glory of Python!"</b>
</p>

<p>
The important part here is to create a folder on my computer where all my Python code for the trials will live. I will be coming back to this folder again and again as I write code to complete the trials. This salutation code is pretty simple, but I have a hunch that more challenging trials lay ahead.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

Looking through the rest of the journal entry, you find some possibly useful tips on how to complete this trial.

<details>
<summary>How do I create a folder using PowerShell on Windows?</summary>

Since you'll be executing your Python code from the terminal, you might want to create the folder for your code using the terminal as well. You could just as easily create a folder using Windows Explorer, but the commands to follow will do the same thing.

Launch the PowerShell app on your computer. Once there, type the following command:

```bash
cd ~
```

The `cd` command __changes the current working directory__ of your terminal session. It's like opening a folder in Windows Explorer. Using the command with a `~` (tilde) after it takes you to your home directory.

Once there, type this command into the PowerShell interface:

```bash
mkdir quest
```

This command will __make a new directory__ (a folder) called `quest` in your home folder. You can put all your Python code for the trials in this folder. Finally, you can change your current working directory to this new folder, so that you can create and execute Python code from this location.

```bash
cd quest
```

Now, you're ready to create and execute some Python code!

</details>

<details>
<summary>How do I create a folder using Terminal on Mac?</summary>

Since you'll be executing your Python code from the terminal, you might want to create the folder for your code using the terminal as well. You could just as easily create a folder using the Finder app, but the commands to follow will do the same thing.

Launch the Terminal app (under Applications > Utilities) on your computer. Once there, type in the following command:

```bash
cd ~
```

The `cd` command __changes the current working directory__ of your terminal session. It's like opening a folder in the Finder. Using the command with a `~` (tilde) after it takes you to your __home directory__.

Once there, type this command into the Terminal:

```bash
mkdir quest
```

This command will __make a new directory__ (a folder) called `quest` in your home folder. You can put all your Python code for the trials in this folder. Finally, you can change your current working directory to this new folder, so that you can create and execute Python code from this location.

```bash
cd quest
```

Now, you're ready to create and execute some Python code!

</details>

<details>
<summary>How do I create a Python file for my code?</summary>

Before you create your Python code file, __make sure you have changed into the directory you want to use for your code__ using the `cd` command, as described in the steps above! Otherwise, your code may end up in the wrong folder. 

If you followed the examples above, you could change into your code directory with this command:

```bash
cd ~/quest
```

You can double-check that you're in the right folder with the `pwd` (present working directory) command:

```bash
pwd
```

When you have done this, you can create a new Python code file in this folder using the name you were told to use to complete the trial - `salutation.py`. On Windows/PowerShell, type this command:

```bash
New-Item -ItemType file salutation.py
```

On Mac or Linux, type this command:

```bash
touch salutation.py
```

Note the `.py` extension at the end of the file name. All Python source code files should have this extension, just like a Microsoft Word doc might have a `.docx` extension, or a music file might have a `.mp3` extension.

Now that you have a code file created, you can open it and write code inside it!

</details>

<details>
<summary>How do I edit my Python code file?</summary>

If you have a favorite text editor already, just use that! If you're not sure what a text editor is, or would like a recommendation, read on.

When you write code, you need to use a __text editor__ of some kind. Usually you don't edit code in the terminal directly. The terminal is just where we issue commands to the computer. You also wouldn't open a code file in a full word processor like Microsoft Word.

There are many great choices out there for text editors, but one powerful, reasonably simple, and free text editor that is available across all platforms is [Visual Studio Code](https://code.visualstudio.com/). We will sometimes refer to it as "VS Code" for short.

Note that this is not the same as [Visual Studio](https://visualstudio.microsoft.com/), which is a full [integrated development environment (IDE)](https://en.wikipedia.org/wiki/Integrated_development_environment). This is __not what you want right now__, unless you have used it before and know what you are doing. A full IDE can be powerful, but all the knobs and buttons inside of them can be very confusing.

VS Code, by contrast, doesn't have quite as many knobs and buttons that you have to learn right away. It still has plenty of features, but we'll stay focused on just editing text.

### Opening your code folder with VS Code

Once you have VS Code installed, launch the application - you should see a blank screen to start with. Next, choose __"File" then "Open..."__ from the menu bar. In the dialogue that appears, __navigate to the folder you created earlier__. Choose __the folder you created, not the Python source file__. This will allow you to easily edit all the files in the folder.

The initial screen you'll see in VS Code will look something like this - click on your `salutation.py` file to begin editing it!

![vs code](images/python/vscode.png)

Inside this file, you can paste in the following Python code to complete the trial:

```python
# Your first line of Python code is below!
print("For the glory of Python!")
```

Which will look something like this:

![hello in vs code](images/python/hello.png)

Make sure to __save this file__ (File > Save) after editing the code!

</details>

<details>
<summary>Some lines of code start with a "#" symbol - what's up with that?</summary>

These lines of code are called __comments__ - they are not actually executed when the Python interpreter runs your code. Comments are used to provide notes and context for other developers (or for yourself!) to explain what a piece of code does.

</details>

<details>
<summary>How do I execute my Python code?</summary>

In your terminal application, make sure your code directory is your __curent working directory__ - if you followed this tutorial, you can navigate to your code directory with this command:

```bash
cd ~/quest
```

If you've reached this point, you should have the `python3` command available in your terminal window. To use this command to execute your Python code, use this command in your terminal:

```bash
python3 salutation.py
```

If your code works as intended, you should see the text __For the glory of Python!__ printed out to your terminal! Many of the trials in this area will instruct you to print out text in this way.

</details>

<details>
<summary>How do I actually complete the trial once my code works?</summary>

Once your code is working as intended, you need to enter the full path to your file in the text field on the right. Following these instructions, that path might look like this on a PC..

```bash
C:\Users\susan\quest\salutation.py
```

...or like this on a Mac...

```bash
/Users/susan/quest/salutation.py
```

Paste this file path into the text field on the right and click *HACK*. We will validate that your code works as expected, and store the __folder__ for later use. You will be instructed to put all your Python code in this folder.

</details>

