# Toledo's Trial Notes

You find another journal entry next to this barrier.

<blockquote>
April 4th, 2016

<hr/>

<p>
The sophists of the Pythonic Temple were notorious for never repeating themselves, no matter what excuse was offered by their exasperated students. Their zeal for efficiency is clear in this trial.
</p>

<p>
<b>Functions</b> are reusable chunks of Python code. If in your code, you find yourself having to perform the same steps over and over, that's a clue that you should consider creating a function. Then, instead of copy/pasting the same code again and again, you can call a function which contains all the code you need.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and tricks

Skimming the journal entry, you find a few other useful tips for this trial.

<details>
<summary>How do I define a function?</summary>

[Functions](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions) are reusable chunks of code that you can use as a developer to avoid writing the same code over and over. Similar to the variables we've already seen, __functions have names as well__. This allows us to __call__ them by name to use their functionality. `print()`, for example, is a function that is built in to Python that allows us to send output to the console.

Here's an example of a Python program that contains a function used to print the name of the currently executing script to the console.

```python
import sys

def print_name():
    print(f"Current script: {sys.argv[0]}")

print_name()
```

When you run this code, you define a function named `print_name` which contains one line of Python code (the one that prints the current script's name). The final line of code in this example __calls__ the function (executes the function's code) by appending an open and closed parentheses `()` to the end of the function name.

</details>

<details>
<summary>What code is considered part of the function? Why are some lines indented now?</summary>

The code inside the function is __indented one tab__ (usually four spaces). Indentation is how you create a __block__ of code in Python. All code that starts at the same indentation level is considered part of the same block. You could add another line of code to your function by adding it at the same indentation level like so:

```python
def print_lines():
    print("This will print first.")
    print("This will print second.")

print_lines()
```

If the next line of code was __NOT__ indented at the same level, it would be executed right after the function was declared.

```python
def print_lines():
    print("This will print second, and now our function has only one line.")
print("This will print first, and is no longer part of the function.")

print_lines()
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `functions.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to __declare a function__ named `hail_friend` that prints out the message `Hail, friend!`.

See the rest of this walkthrough for help on how to declare a function. Once your code in `functions.py` is working as prescribed, click the *HACK* button to submit your work!

</details>
