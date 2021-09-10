# Toledo's Trial Notes

You find another journal entry next to this barrier.

<blockquote>
April 4th, 2016

<hr/>

<p>
After a series of civil conflicts that arose from succession of leaders in the City of Python, the early Pythonistas developed a strict system of succession among its key leaders. Ordered lists remain very important in most societies, and prospective citizens had to complete this trial to ensure they understood the concept.
</p>

<p>
<b>Lists</b> are an ordered list of objects in Python code. Lists can contain any kind of data - strings, numbers, and even more complex data types. I will need to learn how to create and work with data in a list to complete this trial.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and tricks

The journal entry contained a few other useful nuggets of wisdom.

<details>
<summary>How do I create a list?</summary>

Now, you must learn how to create and work with [lists](https://docs.python.org/3/tutorial/datastructures.html) in your Python code. Let's create a list of items that might appear on a grocery list.

```python
groceries = ['apples', 'coffee', 'pizza rolls', 'olives']

print(f"The first item on my grocery list is {groceries[0]}")
print(f"The last item on my grocery list is {groceries[3]}")
```

When you run this code, you create an ordered list of four strings. Each item in the list has an __index__, which is a number that represents its place in the list. In programming, the first item in a list is at index `0`, and the indexes go up from there. In a list of four items, the last index is `3`. 

You can get an item in a list at a specific index using __subscript notation__ - that bit with the square brackets `[]` in the print statement above. `first_item = groceries[0]` would store the first item in the list, the string `apples`, in the variable `first_item`.

Lists can contain any kind of data - this example mixes several data types in one list.

```python
stuff = ['apples', {'favoriteMovieName': 'Star Wars'}, 42, True]

print(f"My favorite movie is {stuff[1]['favoriteMovieName']}")
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `lists.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to __create a list__ called `order_of_succession` that contains the names of five leaders. They must appear in the same order as they did in the last known Pythonic Order of Succession. The names are: `Isabelle`, `Grace`, `Charlotte`, `LeBron`, and `Steve`.

See the rest of this walkthrough for help on how to create a list. Once you have created the `order_of_succession` list object, click the *HACK* button to submit your work!

</details>
