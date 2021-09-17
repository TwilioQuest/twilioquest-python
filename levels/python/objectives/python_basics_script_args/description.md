# Trial of Solicited Input

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/collect_input.py</span></code>
</div>

To progress further, you must complete the __Trial of Solicited Input__. Create a Python script that __prints the first three arguments__ passed in to your script at the command line. For example, if you were to execute your script like this:

```bash
python3 collect_input.py apples oranges pears
```

Your script should print output that looks like this:

```bash
apples
oranges
pears
```

Write your code in a file called `collect_input.py` in the code directory you created earlier (`<%= env.TQ_PYTHON_CODE_PATH.value %>`). __Read the "Help" section__ to learn how to write code which does this. 

Once you have written code that satisfies these requirements, click the *HACK* button to complete the trial!
