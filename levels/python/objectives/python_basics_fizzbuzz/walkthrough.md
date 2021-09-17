# Toledo's Trial Notes

You see a particularly tattered journal entry from Toledo Van Possum next to this barrier. It seems like this was one of the last barriers he encountered in the Initiation Ritual Chamber.

<blockquote>
October 3rd, 2016

<hr/>

<p>
It's October 3rd.
</p>

<p>
At last, we come to it - the infamous <b>Trial of Trickery</b>. In the ancient City of Python, there were some who believed that this trial was a fair test of one's basic programming skills. Others said that it was an unfair trick, and relied upon the programmer being aware of a seldom-used mathematical operator (the <a href="https://stackoverflow.com/questions/4432208/what-is-the-result-of-in-python">modulo operator</a>).
</p>

<p>
Whether or not this trial is a fair assessment of skill, implementing the so-called "FizzBuzz" challenge is a useful exercise in combining list iteration and conditional logic. I will collect my techniques here for future explorers, so that this can be a learning exercise rather than a test.
</p>

<p>
--TVP
</p>
</blockquote>

## Tips and tricks

Scanning through the journal entry, you find a few passges that may help in completing this trial.

<details>
<summary>At a high level, what does my code need to do?</summary>

Often, it is useful to map out a solution to a problem using __pseudocode__ - pseudocode is code that is not meant to actually be executed, but helps you sketch out how you want your solution to work. After you have an idea of how to proceed, you implement your pseudocode in real code.

Here is some pseudocode that describes what you need to do to complete the FizzBuzz challenge.

<pre>
inputs = list of all arguments to my script

for each input in the list, do the following:
    convert the input to a number
    set my print string equal to a blank/empty string
    if the number is divisible by 3, append "fizz" to the output string
    if the number is divisible by 5, append "buzz" to the output string
    if by now the output string is still blank, set it to the input number
    print the output string
</pre>

This pseudocode describes a technique of completing the challenge. There are others, but this approach should work. Now, we need to figure out how to make all this happen with real Python code.

</details>

<details>
<summary>How do I get a list of all the arguments passed in to my script?</summary>

You recall from a previous challenge that you can use the `sys` module to get a list of all arguments to your script, and then remove the first item (since it contains the program name, which you don't need).

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Now, inputs is ready for us to work with
```

</details>

<details>
<summary>How do I convert a string to an integer?</summary>

When inputs are passed to your program, they are initially available as strings of text. In order to do math with the inputs, we need to covert the input to a number. This technique is called [type casting/coercion/conversion](https://en.wikipedia.org/wiki/Type_conversion), with the second word being used mostly interchangeably.

Python has a few [built-in](https://www.w3schools.com/python/python_casting.asp) type casting functions - for this challenge, you'll need to convert a string to an integer using the `int` function.

```python
number_string = "100"
number_converted = int(number_string)
print(f"100 minus 60 is {number_converted - 60}")
```

</details>

<details>
<summary>How do I tell if one number is divisible by another?</summary>

If you have a number A and a number B, number A is divisible by number B if after dividing A by B, there is no remainder left over.

If you divide `6` by `3`, the result is `2` with no remainder. `6` IS divisble by `3`.

If you divide `7` by `3`, the result is `2` with a remainder of `1`. `7` IS NOT divisible by `3`.

So how do we figure this out in Python code? With a seldom-used operator called `modulus` or `modulo` - the `%` (percent) character in your code. Using this operator, you can store the remainder after dividing two numbers in a variable.

```python
rem1 = 6 % 3
rem2 = 7 % 3

print(f"The remainder after dividing 6 by 3 is {rem1}.")
print(f"The remainder after dividing 7 by 3 is {rem2}.")
```

In the code above, `rem1` would be `0`, and `rem2` would be `1`.

So, in summary - you can tell if one number is divisble by another number by using the `%` operator. If the result is equal to zero, the first number is divisible by the second.

</details>

<details>
<summary>How do I loop through a list and execute conditional logic?</summary>

If you have reached this point, you have already written code which does both of those things. Refer to the code you have already written in your code folder:

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

The files `list_iteration.py`, `booleans.py`, and `branching.py` should contain some helpful examples. You'll have to __combine these techniques__ to complete this trial.

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Create a file called `fizzbuzz.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to process command line arguments to your script, and print the appropriate output for each input. Example script execution:

```bash
python3 fizzbuzz.py 30 200 7 6
```

Example output:

```bash
fizzbuzz
buzz
7
fizz
```

Once again, the rules for the print statements are as follows:

* If the number is __divisible by 3__, print the text: `fizz`
* If the number is __divisible by 5__, print the text: `buzz`
* If the number is __divisible by both 3 and 5__, print the text: `fizzbuzz`
* If none of the above are true, __print the number__

You might consider using the code below as a starting point - it will prepare a list containing all the command line arguments passed to your script.

```python
import sys

# Set up a list for our code to work with that omits the first CLI argument, 
# which is the name of our script (fizzbuzz.py)
inputs = sys.argv
inputs.pop(0)

# Process the "inputs" list as directed in your code
```

Once your code in `fizzbuzz.py` can process command line arguments in a way that satisfies these requirements, click the *HACK* button to complete the trial. You can do it!

</details>