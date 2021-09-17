# Trial of Trickery

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/fizzbuzz.py</span></code>
</div>

Create a program that __accepts any number of command line arguments__. The arguments will be whole/integer numbers. Your script will need to examine all these numbers and execute the following conditional logic:

* If the number is __divisible by 3__, print the text: `fizz`
* If the number is __divisible by 5__, print the text: `buzz`
* If the number is __divisible by both 3 and 5__, print the text: `fizzbuzz`
* If none of the above are true, __print the number__

Example script execution:

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

When you have written code in `fizzbuzz.py` that satisfies this requirement, click the *HACK* button to complete the trial.
