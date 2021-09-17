const { NiceError } = require("../../../../scripts/objectiveValidation");

module.exports = async (helper) => {
  try {
    const { cityName, resultNumber } = helper.validationFields;

    if (!cityName || !resultNumber) {
      throw new NiceError(`
        Please enter an answer for both questions!
      `);
    }

    if (cityName.toLowerCase().indexOf("amsterdam") < 0) {
      throw new NiceError(`
        Hmm, that isn't the city we're looking for. While in the REPL interface,
        type <span class="highlight">copyright()</span>. One of the copyright 
        holders is found in a European city that starts with the letter "A".
      `);
    }

    const rn = resultNumber.trim();
    const tn = Number(rn);
    if (!tn || tn !== 8) {
      throw new NiceError(`
        Hm, that's not it. Did you notice that "24 / 3" looks like a math
        problem? You are using Python code to divide 24 by 3. Try typing it in
        the REPL again to see the result.
      `);
    }

    helper.success(`
      Nice job! You've completed the Trial of Trial &amp; Error.<br/> <br/> 
      The REPL has a few built-in functions like 
      <span class="highlight">help()</span> and 
      <span class="highlight">copyright()</span>.  <br/> <br/>
      You can also execute 
      arbitrary Python code - when you 
      typed <span class="highlight">24 / 3</span>, you asked Python to divide 
      24 by 3, giving you the result of 
      <span class="highlight">8</span>.
    `);
  } catch (e) {
    console.log(e);
    if (e.name === "NiceError") {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! We couldn't validate your answers. Please try again.
      `);
    }
  }
};
