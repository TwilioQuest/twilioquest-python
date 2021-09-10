# Toledo's Trial Notes

Another conveniently dropped journal entry from Toldeo Van Possum is clearly visible next to this barrier.

<blockquote>
March 1st, 2016

<hr/>

<p>
The achievements of the early Pythonistas were fueled by their ability to have computers do math for them, so they could focus on big ideas. I must follow in their footsteps and learn to use the power of math in Python.
</p>

<p>
To complete this trial, I will need to declare four variables as instructed. Using numbers passed in to my script as command line arguments, I will need to use Python's built-in arithmetic operators to do addition, subtraction, multiplication, and division.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and Tricks

Perusing the rest of the journal entry, you notice a few interesting tidbits that may help to complete this trial.

<details>
<summary>How do I know what symbols to use for the different mathematical operations?</summary>

You can find an exhaustive list [here](https://docs.python.org/3/library/operator.html#mapping-operators-to-functions), but the ones you'll need for this trial have examples below.

```python
print(f"2 plus 2 equals { 2 + 2 }");
print(f"8 minus 4 equals { 8 + 4 }");
print(f"12 divided by 4 equals { 12 / 4 }");
print(f"11 times by 3 equals { 11 * 3 }");
```

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `numbers.py` in your code folder: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to __declare four variables__ - see the table in the "Objective" tab for what you need to name them. The variables need to store the results of four math operations on numbers passed to your script as __command line arguments__. You were given this code as a starting point:

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

Like previous examples, it uses the `sys` module to read inputs to your script, and it assigns that input to variables named `first_number` and `second_number`. To execute your script with arguments, you'd use this command in the terminal:

```bash
python3 numbers.py 12 4
```

As you are writing your code, you can execute it in this way to test it and make sure it works. When your code is ready, click the *HACK* button to complete the trial. [Mathematical!](https://www.youtube.com/watch?v=FfPFtbJAEm8)

</details>