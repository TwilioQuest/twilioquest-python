# Toledo's Trial Notes

You find another journal entry next to this barrier.

<blockquote>
April 22nd, 2016

<hr/>

<p>
The pixel rendering of the ancient Pythonistas was incredibly advanced for their time. Their factories could take in raw packets, process them, and churn out works of art prized around The Cloud of that era.
</p>

<p>
Functions work the same way as a factory - they take in raw materials (arguments), process them (execute code), and can <b>return</b> a useful result. That's what I will learn to do to complete this trial.
</p>

<p>
--TVP
</p>
</blockquote>

## Hints and Tips

Skimming the rest of the journal entry, you find a few more points of interest.

<details>
<summary>How do I return a value from a function?</summary>

Often, after your function is executed, you will want to give some kind of result back to the caller of your function. To do this, we use the `return` keyword. Let's use our previous `hail_friend` function as a starting point.  This time, instead of immediately printing the message, let's `return` it from our function. That will allow the caller of our function to store that value in a variable and do whatever they want with the result.

```python
def hail_friend(name):
    message = f"Hail, {name}!"
    return message

greeting_one = hail_friend("Edward")
greeting_two = hail_friend("Alphonse")

print(greeting_one)
print(greeting_two)
```

This is very similar to other function code we have seen, but now the final line of code in our function uses the `return` keyword to send the result of our function code back to the caller.

</details>

<details>
<summary>What do I need to do to complete this trial?</summary>

Open (or re-create if needed) a file called `functions.py` in your code folder located here: 

```bash
<%= env.TQ_PYTHON_CODE_PATH.value %>
```

In that file, you'll need to __declare a function__ named `add_numbers` that takes two arguments - those arguments will be integer numbers that your function should add together. If you haven't encountered Python code to add numbers together, here's how you would do it:

```python
result_sum = first_number + second_number
```

See the rest of this walkthrough for help on how to declare a function that takes arguments and returns a result. Once you have added a function to `functions.py` called `add_numbers` that is working as prescribed, click the *HACK* button to submit your work!

</details>