# Toledo's Trial Notes

You find another journal entry next to this barrier.

<blockquote>
March 15th, 2016

<hr/>

<p>
In the City of Python, a liberal arts education was considered a thing of value. Learning how to learn, and exposure to a wide variety of academic disciplines, made the early Pythonistas a multi-faceted people. Clearly, they sometimes wanted their data to be multi-faceted as well.
</p>

<p>
<b>Dictionaries</b> are a data type that allows programmers to create more complex data than just numbers, strings, and other basic data types. Using <b>key/value pairs</b>, it becomes possible to model concepts like a blog post that has a <code>title</code> and an <code>author</code>, and other more complex ideas. Of course, <a href="https://docs.python.org/3/tutorial/classes.html">classes</a> are also used for this purpose, but that is a topic for another time. Dictionaries are a light-weight way to create a container for related data.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and tricks

Skimming the journal entry, you find a few other useful tips for this trial.

<details>
<summary>How do I create a dictionary?</summary>

[Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) are one of many tools in Python that allow us to describe more complex data. The code below creates a dictionary that describes the properties of a dog:

```python
dog = {
    'name' : 'Koto',
    'age' : 4,
    'color' : 'white',
    'fluffy' : True }

print(f"My dog's name is {dog['name']}")
```

When you run this code, you would create a new dictionary and assign it to a variable called `dog`. In the print statement, you access one of the __values__ stored in the dictionary by its __key__. The key `name` in the `dog` dictionary has a value of `Koto`.

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `dictionaries.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to __declare a variable__ named `super_hero` that contains a dictionary with these properties:

| Key | Value | Value Type |
| --- | ----- | ---- |
| name | `Miles Morales` | string |
| hero_name | `Spider-Man` | string |
| power_level | `9999` | integer |

Once your code in `dictionaries.py` is working as prescribed, click the *HACK* button to submit your work!

</details>
