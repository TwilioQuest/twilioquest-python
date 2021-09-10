# Trial of Iteration

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/list_iteration.py</span></code>
</div>

To complete the __Trial of Iteration__, you must write a script that can accept __any number of command line arguments__. The arguments to your script will be a list of names, in order, for a series of leaders in the order of succession in the City of Python.

For all the arguments that are passed to your script, print out the leader's name, __prepended with their order__ in the line of succession. For example, if your script was executed like this:

```bash
python3 list_iteration.py Deak Windy Luke Biggs
```

The output of your program should be:

```bash
1. Deak
2. Windy
3. Luke
4. Biggs
```

When your program can output a nicely formatted list in this way, click the *HACK* button.
