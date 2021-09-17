# An Unexpected Challenge

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
  <code><span><%= env.TQ_PYTHON_CODE_PATH.value %>/citizen.py</span></code>
</div>

Create a [Python class](https://docs.python.org/3/tutorial/classes.html) to describe a citizen of the City of Python. The class should be named `Citizen` and have the following data and functionality.

* A __docstring__ that describes the class
* An __init method__ that takes `first_name` and `last_name` arguments (strings) and assigns them as __instance variables__
* An __instance method__ called `full_name` that returns a string that combines the first and last name instance variables, with a single space between them
* A __class variable__ called `greeting` which is a string set to `For the glory of Python!`

When you have created a class which meets these criteria in the `citizen.py` Python file, click the *HACK* button.
