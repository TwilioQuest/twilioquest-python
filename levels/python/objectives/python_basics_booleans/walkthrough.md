# Toledo's Trial Notes
A brief search of the area surrounding this barrier reveals another of Toledo Van Possum's journal entries.

<blockquote>
July 10th, 2016

<hr/>

<p>
The early Pythonistas believed in the power of science and peer review to establish objective truth. They included the Trial of Truth in their citizenship trials to ensure this value was passed down to their newest members.
</p>

<p>
To complete this trial, I will need to create variables that contain a new kind of value - a <a href="https://docs.python.org/3/library/stdtypes.html#truth-value-testing">Boolean</a>. Hah. "Boolean". That's a funny word to say.
</p>

<p>
<b>Booleans</b> represent the concept of true and false. In programming, it's frequently necessary to execute one code path under one set of circumstances, and different code under another. If a user is logged in, show them their account balance. If they are not logged in, redirect them to a login page. I'll need to demonstrate basic command of this concept to complete this trial.
</p>

<p>
--TVP
</p>
</blockquote>

## Hints and Tips

Throughout the journal entry, you find a few helpful passages.

<details>
<summary>How do I create boolean variables?</summary>

You can assign a value of `True` or `False` directly to a variable using the capitalized words of the same name.

```python
tacos_rule = True
root_canal_fun = False
```

</details>

<details>
<summary>How do I execute code if a certain condition is true?</summary>

You can define a block of code that will only be executed under certain conditions by using an __if statement__:

```python
tacos_rule = True

if tacos_rule:
    print("Well, of course tacos rule!")
```

More often, you will use [comparison logic](https://docs.python.org/3/library/stdtypes.html#comparisons) to determine whether or not a code block should be executed. These are statements that evaluate to `True` or `False` depending on the data being compared. The code below uses the not equal comparison (`!=`) to determine whether or not to execute the print statement.

```python
dinner_name = "kale"

if dinner_name != "tacos":
    print("Why aren't we eating tacos?")
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `booleans.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Create a program that declares several [boolean](https://docs.python.org/3/library/stdtypes.html#truth-value-testing) variables. The variables must have the following names and values:

* A variable `python_is_glorious` must be set to `True`
* A variable `failure_is_option` must be set to `False`
* A variable `proper_greeting` should be INITALLY set to `False`

When your script runs, you should check the value of the first argument passed in to your script: `sys.argv[1]`. If that argument is `For the glory of Python!`, set the `proper_greeting` variable to `True`. This is an example script invocation that would result in the `proper_greeting` variable being set to `True`:

```bash
python3 booleans.py 'For the glory of Python!'
```

Any other input would leave the value of `proper_greeting` as `False`.

Once your script declared variables correctly, click the *HACK* button!

</details>