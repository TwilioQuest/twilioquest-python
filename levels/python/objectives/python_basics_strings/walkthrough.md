# Toledo's Trial Notes

Next to the barrier, you find another of Toledo's journal entries.

<blockquote>
March 3rd, 2016

<hr/>

<p>
The City of Python is renowned for its thinkers and philosophers, whose words have echoed through the ages. This trial was designed to help future Python programmers learn to use their words in a similarly powerful way.
</p>

<p>
To complete this trial, I will need to write code that takes an input string and make it <b>SUPER STOKED!!!</b> I've already used strings in a few of these challenges, but strings are built-in objects in Python that represent strings of characters (text and other data). A lot of Python code I write will need to manipulate text through these objects, so it's clear why it was important enough to include in the citizenship trials.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

Skimming the rest of the journal entry, you find a few more interesting passages.

<details>
<summary>How do I get the input string to my program?</summary>

Here is some code you can use as a starting point for this exercise. As before, it uses the `sys` module to read in an input string as a command line argument:

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

You would execute this program like so:

```bash
python3 strings.py "am I stoked enough yet"
```

As written, the starter code above would not actually manipulate or change the string in any way - that is your task.

</details>

<details>
<summary>How do I change a string in Python code?</summary>

Technically, Python strings are __immutable__, which means once you create them, you can't change them. What you do instead is use existing strings to transform their value and create new strings.

Python's [string object](https://docs.python.org/3/library/stdtypes.html#string-methods) has many __methods__ which enable you to return a new string with some kind of transformation applied to it. We'll learn more about them later, but __methods__ are __functions__ (like `print`) which operate on a specific __instance__ (copy) of an object. You may find the [upper](https://docs.python.org/3/library/stdtypes.html#str.upper) method useful.

```python
new_string = "get stoked".upper()
print(new_string)
```

You can combine strings together (__concatenate__ them) in several ways, but one way is to use the `+` operator. Yes, this is the same operator you use to __add numbers__, but when you use it with two or more strings, it joins those strings together.

Here is an example of joining two strings to form a complete string with the value `The NY Mets are my favorite squadron.`:

```python
part_one = "The NY Mets "
part_two = "are my favorite squadron."

full_message = part_one + part_two
print(full_message)
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `strings.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to take one __command line argument__, a string, and transform it in two ways. Use this code as a starting point:

```python
import sys

# Read in an input string passed in to our script as an argument
input_string = sys.argv[1]
output_string = input_string

# Now, print your transformed string:
print(output_string)
```

Unchanged, the code above will not satisfy the requirements of the trial - it will simply print out the input string. You will need to use the techniques described in this walkthrough to create a string that has been __converted to all caps__ and has had __three exclamation points__ appended to it, then __print that string to the console__.

You can test your code by executing it like this:

```bash
python3 strings.py "am I stoked enough yet"
```

If your code worked, it would print out the string `AM I STOKED ENOUGH YET!!!`.

Once your code in `strings.py` is working as prescribed, click the *HACK* button to submit your work!

</details>
