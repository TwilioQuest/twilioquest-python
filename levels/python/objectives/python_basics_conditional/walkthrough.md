# Toledo's Trial Notes
A brief search of the area surrounding this barrier reveals another of Toledo Van Possum's journal entries.

<blockquote>
August 21st, 2016

<hr/>

<p>
Our search through the Initiation Ritual Chamber continues, though I'm beginning to doubt if the final clue even exists. Thankfully, we have finally encountered another Trial - the Trial of Branching Paths. Using what I learned about Booleans and comparison logic, I must now learn how to branch my code in multiple directions to support many different scenarios.
</p>

<p>
If I ever make it out of this chamber, I am asking the TwilioQuest program to double my usual fee.
</p>

<p>
--TVP
</p>
</blockquote>

## Hints and Tips

Throughout the journal entry, you find a few helpful passages.

<details>
<summary>How do I write code that branches in multiple directions?</summary>

We've already seen the `if` statement, which lets us execute a code block when a certain condition is true. To support more than one condition, we should also become comfortable with the `elif` and `else` statements.

```python
dinner_name = "kale"

if dinner_name == "tacos":
    print("Tacos for dinner - right on!")
elif dinner_name == "pizza":
    print("Pizza - can't go wrong there!")
else:
    print("Okay - better than being hungry amirite?")
```

You can use [comparison logic](https://docs.python.org/3/library/stdtypes.html#comparisons) to determine whether or not a code block should be executed. Conditional statements like this one can have only one `if` and `else` block, but your code can include as many `elif` blocks as necessary.

An `elif` block works just like an if statement - these comparisons are all executed in order, and whenever the first one evaluates to `True`, none of the other conditions will be evaluated. Order is important for these!

An `else` statement declares a code block that will be executed if none of the other conditions are true.

</details>

<details>
<summary>How do I convert input to my script (strings) into numbers?</summary>

To complete this challenge, you will need to compare the values of the numbers passed in to your script as arguments. However, when you initially read them from `sys.argv`, those values will be __strings__ and not __numbers__. To do numeric comparisons on them, we will need to convert the arguments to __integers (whole numbers)__ or __floats (decimal numbers)__. The code below shows how to convert inputs to integers.

```python
first_num = int(sys.argv[1])
second_num = int(sys.argv[2])
sum_to_use = first_num + second_num
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `branching.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

Create a program that __accepts two command line arguments__ - two numbers (whole/integer numbers) that you must add together. Depending on the __sum of those numbers__, your code should print different messages.

* If the sum of the numbers is __less than or equal to zero__, print the text: <div>`You have chosen the path of destitution.`</div>
* If the sum of the numbers is __1 through 100 (including 100)__, print the text: <div> `You have chosen the path of plenty.`</div>
* If the sum of the numbers is __greater than 100__, print the text: <div> `You have chosen the path of excess.`</div>

Example script execution:

```bash
python3 branching.py 30 200
```

Example output:

```bash
You have chosen the path of excess.
```

Once your script can handle all three conditions correctly, click the *HACK* button!

</details>