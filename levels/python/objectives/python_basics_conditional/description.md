# Trial of Branching Paths

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/branching.py</span></code>
</div>

Create a program that __accepts two command line arguments__ - two numbers (whole/integer numbers) that you must add together. Depending on the sum of those numbers, your code should print different messages.

* If the sum of the numbers is __less than or equal to zero__, print the text:<br/> `You have chosen the path of destitution.`
* If the sum of the numbers is __1 through 100 (including 100)__, print the text:<br/> `You have chosen the path of plenty.`
* If the sum of the numbers is __greater than 100__, print the text:<br/> `You have chosen the path of excess.`

Example script execution:

```bash
python3 branching.py 30 200
```

Example output:

```bash
You have chosen the path of excess.
```

When you have written code that satisfies this requirement, click the *HACK* button to complete the trial.
