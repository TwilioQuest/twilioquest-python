# Toledo's Trial Notes
A brief search of the area surrounding this barrier reveals another of Toledo Van Possum's journal entries.

<blockquote>
February 21st, 2016

<hr/>

<p>
Names carried great significance in the City of Python, and were chosen carefully to describe the person or object they were assigned to. They expected the same to be true in their citizens' Python code.
</p>

<p>
To complete this trial, I will need to declare two variables as instructed. In programming, "variables" are used as placeholders for data my code will operate on. Variables are usually given descriptive names, so that someone reading the code will have some idea what sort of data is contained within them.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

Reading through the rest of Toledo's journal entry, you find some potentially useful tips.

<details>
<summary>I forgot how to create code files and execute them...</summary>

Not to worry! You can go back to review previous trials by walking up to the completed trial barriers and pressing the *SPACEBAR*. You can review the techniques you learned in those trials as often as necessary. The first few trials of this area should familiarize you with how to write and execute Python code.

</details>

<details>
<summary>What is a variable and how do I create one?</summary>

A [variable](https://www.w3schools.com/python/python_variables.asp) is a container for data your program will operate on. Variables should have continuous names without spaces. In Python, if you feel like a variable name needs to be multiple words, you would use a `_` character in the name instead of a space. So if you wanted to name a variable "my awesome thing", a good way to express that in Python would be `my_awesome_thing`.

Variable names are created by you - they can be (almost) anything you want them to be.

You __assign__ a value to a variable in code using the `=` (equals sign). The code below assigns the number `777` to a variable called `lucky_number`, and assigns the string `"Star Wars"` to a variable called `favorite_movie`.

```python
lucky_number = 777
favorite_movie = "Star Wars"

print(f"My luck number is {lucky_number}")
print(f"My favorite movie is {favorite_movie}")
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `variables.py` in your code folder: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, create a variable `favorite_robot` which is set to the string `"Cedric"`. Create another variable called `meaning_of_life` which is set to the number `42`. If you don't know how to declare variables, read the tip above this one.

When your code is ready, click the *HACK* button to complete the trial.

</details>
