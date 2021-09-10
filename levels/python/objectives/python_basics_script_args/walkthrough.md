# Toledo's Trial Notes
Another of Toledo Van Possum's journal entries is lying next to this barrier!

<blockquote>
February 12th, 2016

<hr/>

<p>
The Trial of Solicited Input is intended to show the aspiring Python developer how to give their code some initial data to work with. Usually when you write code to perform a task, there are three high-level steps:
</p>

<ol>
<li>You provide your code some input</li>
<li>Your code runs, performing calculations or some other work on the input</li>
<li>At the end of its processing, your code returns some kind of output</li>
</ol>

<p>
In this case, my input will come in the form of <b>command line arguments</b> - those are the strings you type after the name of your script. The output will be the print statements I've been asked to create. I'll also need to use some new Python tricks to make all this work:
</p>

<ul>
<li>Import a module from Python's standard library</li>
<li>Access "arguments" (input) passed in to my script</li>
<li>Insert data (the arguments) passed to my script in my print statements</li>
</ul>

<p>
I'll record my techniques here for future explorers.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

Looking through the rest of the journal entry, you find some possibly useful tips on how to complete this trial. In particular, there is one example of how to write a script that uses input from command line arguments.

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

After copying this code into a file named `collect_input.py`, you execute it like this:

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

The script runs, and prints out all the arguments in order. Wow - this appears to be the whole solution, actually! You take a moment to understand what the key parts of this code are.

## Importing a module 

The first line of code in the solution is:

```python
import sys
```

Here, your code is "[importing](https://docs.python.org/3/reference/import.html)" a module from Python's standard library. Let's break down some of the lingo here:

* __Module__: A module is code written somewhere else (maybe by someone else) that you are using in your own code for a specific task. You can write your own modules to organize your code in different files, or you can use modules written by other people. The [sys](https://docs.python.org/3/library/sys.html) module is built-in to Python to perform tasks such as collecting input for your script.
* __Import__: When we need to use code defined in another module, we have to "import" it into our code using the `import` keyword ([docs](https://docs.python.org/3/reference/import.html)). For built-in modules like `sys`, we can just pass in the module name after the `import` keyword. There are other ways to include modules, but that's a topic for another time.
* __Standard Library__: These are modules that are [built in to Python](https://docs.python.org/3/library/) to do common tasks. There are modules in the standard library to help you work with numbers, dates, text, and other common data types. 

In the code for this trial, we use the `sys` module to access the input that was passed in to our script when we executed it.

## Printing text to the console

This is actually the second time you have seen a __function__ called `print` in your example code. [This function](https://docs.python.org/3/tutorial/inputoutput.html) is automatically available in all Python code as a convenience to print text out to the console.

You'll learn more about __functions__ later, but in short, functions are reusable chunks of code you can call over and over with different inputs to perform a task. The [print function](https://docs.python.org/3/library/functions.html#print) takes arguments which represent some information you want to print to the console.

These print statements also use a feature of Python called ["f" strings](https://docs.python.org/3/tutorial/inputoutput.html#tut-f-strings). They allow you to insert data from your program into a string of text. We'll learn more about strings later.

## Accessing script arguments

To actually get the arguments passed into the program, you're using the `sys.argv` object. This object is a [list](https://www.w3schools.com/python/python_lists.asp) of strings that contain all the arguments passed in to the `python3` command, including the name of your script.

`sys.argv[0]` will always be the name of your script - in this example, that would be "collect_input.py".

`sys.argv[1]` would be the first argument to your script after the name.

`sys.argv[200]` would be the 200th argument passed in to your script. Be careful - if your script didn't have 200 arguments, this code would [result in an error](https://docs.python.org/3/tutorial/errors.html)!

## Completing the trial

To complete the trial, copy Toledo's code from above into a file named `collect_input.py` in the `<%= env.TQ_PYTHON_CODE_PATH.value %>` folder on your computer. In the terminal, start by entering the following command:

```bash
cd <%= env.TQ_PYTHON_CODE_PATH.value %>
```

This will change your [current working directory](https://en.wikipedia.org/wiki/Working_directory) to your Python code folder. Next, create a Python code file named `collect_input.py` in this folder if you haven't already. 

On Mac or Linux, type this command:

```bash
touch collect_input.py
```

On Windows (PowerShell), type this command:

```bash
New-Item -ItemType file collect_input.py
```

Next, open your code file in Visual Studio Code or the text editor of your choice. Save the following code in `collect_input.py`:

```python
import sys

print(f"The name of this Python file is '{sys.argv[0]}'")
print(f"The first argument passed in to my script was: '{sys.argv[1]}'")
print(f"The second argument passed in to my script was: '{sys.argv[2]}'")
print(f"The third argument passed in to my script was: '{sys.argv[3]}'")
```

Test out your script by executing it with three arguments, like so.

```bash
python3 collect_input.py snacky yogurt "a long thing in quotes"
```

Your script should print out all the arguments to the console. Once your code can do this, click the *HACK* button on the right to complete the trial!
