# Trial of Numbers

<style>
.py-script-info {
  font-size: 16px;
  text-align: center;
  background-color: #FFFFE0;
  border: 2px solid #F0E68C;
  padding: 5px;
  line-height: 1.5em;
  margin: 5px 0;
  font-style: italic;
}

.py-script-info span {
  font-style: normal;
  color: #000;
}
</style>

<div class="py-script-info">
  Complete this trial using Python code in the folder you created earlier <b>using this file name</b>:
  <br/>
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/numbers.py</span></code>
</div>

To complete the __Trial of Numbers__, your code must __declare four variables__ which are the result of math operations performed on the two numbers passed in to your script as command line arguments. Use the following code as a starting point:

```python
import sys

# This code reads in arguments and converts those inputs to decimal numbers
first_number = float(sys.argv[1])
second_number = float(sys.argv[2])

# Your code goes here!
result_sum = first_number + second_number

print(f"{first_number} plus {second_number} equals {result_sum}")
```

Here are the variables you need to declare:

| Variable Name | Description |
| ------------- | ----------- |
| `result_sum` | The result of adding `first_number` and `second_number`. This variable is already declared in the example code above. |
| `result_difference` | The result of subtracting `second_number` from `first_number`. |
| `result_product` | The result of multiplying `first_number` and `second_number`. |
| `result_quotient` | The result of dividing `first_number` by `second_number`. |

Once you have written code that defines these four variables from input to your script, click the *HACK* button to complete the trial.
