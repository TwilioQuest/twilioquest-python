# Toledo's Trial Notes

You find another journal entry next to this barrier.

<blockquote>
June 1st, 2016

<hr/>

<p>
Productivity was a hallmark of the early Pythonistas - they were famous for tearing through their TODO lists with ruthless efficiency. In this challenge, my code must demonstrate the ability to work through lists as well.
</p>

<p>
In this trial, I'll to use a <a href="https://realpython.com/python-for-loop">for/in loop</a> to execute some code for every item in the list of command line arguments passed to my script. 
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and tricks

A few passages in the journal entry are of particular interest for this trial.

<details>
<summary>How do I execute code for every item in a list?</summary>

Executing code for every item in a list (or, __iterating__ through a list) is one of the most common tasks in programming. To complete this trial, use a [for/in loop](https://realpython.com/python-for-loop/) to execute a block of code for every item in a list. Let's look at an example using our grocery list from before.

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for item in groceries:
    string_to_print = f"- {item}"
    print(string_to_print)
```

When you run this code, you create an ordered list of four strings, as before. This time, you use a new statement: `for item in groceries:`

Your code is saying a few things in this single statement:
* I want to execute the code starting on the next line for every item in the list stored in the variable named `groceries`
* Every time this code runs, create a variable called `item` which is a reference to the next item in the list

The code that runs during the loop __is indented one tab (~four spaces)__ from where the for loop started. [This indentation](https://docs.python.org/3/reference/lexical_analysis.html#indentation) tells Python what code should be executed during the loop. Without the indentation, the code would all be executed in order, and the logic wouldn't work.

There's one improvement we could make to this logic which makes use of the built-in function [enumerate](https://docs.python.org/3/library/functions.html#enumerate). This gives us the __index__ of each item as we loop through the list as well:

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print("These are the items on my grocery list:")
for index, item in enumerate(groceries, start=1):
    string_to_print = f"{index}. {item}"
    print(string_to_print)
```

The above technique may be useful in this trial.

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `list_iteration.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Use the following code as a starting point - it creates a new list called `order_of_succession`, which contains all the arguments passed to your script.

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (list_iteration.py)
order_of_succession = sys.argv
order_of_succession.pop(0)

# Now, order_of_succession is ready for us to work with
```

Your code must print out the name of every person in that list, prepended with their order in the Pythonic order of succession. See the "Objective" tab for an example input and output.

The rest of this walkthrough contains help on how to execute code for every item in a list. Once you have written code that can process all the command line arguments to your script, click the *HACK* button to verify your work!

</details>

