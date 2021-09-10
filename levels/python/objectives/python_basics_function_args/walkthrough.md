# Toledo's Trial Notes

You find another journal entry next to this barrier.

<blockquote>
April 10th, 2016

<hr/>

<p>
The Pythonic Temple was a hotbed of political debate and the center of public life in the City of Python. A well-crafted argument could (and did) change the course of history. Prospective citizens in the City of Python had to learn to make and accept persuasive arguments.
</p>

<p>
Functions, as I have observed, do allow me to reuse chunks of code. But frequently, I will need to modify the behavior of that code juuuuust a bit to work with different data. That is why functions have to be able to accept <b>arguments</b> - different input data to work on. I can use the same function code I created for the last trial as a starting point, but I will need to modify it to accept an argument.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

The journal entry contains a few other tidbits you may find useful.

<details>
<summary>How do I make a function accept arguments?</summary>

__Arguments__ are not an entirely new concept for us. We have already been working with __arguments__ that have been passed in to our Python scripts from the command line. [Arguments to functions](https://docs.python.org/3.7/tutorial/controlflow.html#defining-functions) work in a very similar way. Arguments are pieces of data your functions use to power the code inside them.

Here is an example of defining a function with two arguments.

```python
def favorite_foods(firstFavorite, secondFavorite):
    print(f"My favorite foods are {firstFavorite} and {secondFavorite}.")

favorite_foods('tacos', 'pizza')
```

When you run this code, you define a function named `favorite_foods`. You specify that your function takes __two arguments__ by setting up two placeholder variables between the open and closed parentheses. If your function takes multiple arguments, the variable names for those arguments are separated by a comma `,`.

The function its self has only one line of code - it prints a [formatted string](https://realpython.com/python-f-strings/) which slots in the argument variables `firstFavorite` and `secondFavorite`.

On the last line of code in the example, we call the function with two arguments, the strings `tacos` and `pizza`. When passing arguments, we separate those with a comma `,` also.

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Open the file you created for the previous trial - `functions.py` - or create it again (if you deleted it) in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to __declare or modify a function__ named `hail_friend` that takes one argument, the name of the person to be greeted. Instead of printing the same message every time the function is called, this time the function must print a different message every time, using the input to the function.

For example, if your function is called like so:

```python
hail_friend('Jonathan Joestar')
```

It should print the text `Hail, Jonathan Joestar!` to the console. See the rest of this tutorial for help on how to declare a function that takes arguments. Once your code in `functions.py` is working as prescribed, click the *HACK* button to submit your work!

</details>
