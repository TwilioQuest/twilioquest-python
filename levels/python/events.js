const handleToldeo = require('./events/handleToldeo');
const handleSage = require('./events/handleSage');

// Default Python world state
const DEFAULT_WORLD_STATE = {
  hasSeenStaffChest: false,
  canSolvePuzzle: false,
  cluesFound: 0,
  cluesTotal: 9,
  clues: {},
  toledoInitialGreeting: false,
  sageInitialGreeting: false,
};

module.exports = function (event, world) {
  // Get current state of the python world
  const pystate = world.getState('pythonWorldState') || DEFAULT_WORLD_STATE;

  // Wire up event scripting
  handleToldeo(event, world, pystate);
  handleSage(event, world, pystate);

  // Update world state with convenience flag
  pystate.canSolvePuzzle = pystate.cluesFound === pystate.cluesTotal;

  // Update clue status, if relevant
  console.log(event.target);
  if (
    event.name === 'conversationDidEnd' &&
    event.npc && 
    event.npc.conversation.indexOf('ghost_clue') === 0
  ) {
    let message = `
      <em>
        you now have ${pystate.cluesFound} of the ${pystate.cluesTotal} clues
      </em>
    `;
    if (pystate.cluesFound === pystate.cluesTotal) {
      message = `<em>you now have all the clues</em>`;
    }

    world.showNotification(`
      The ghostly figure dissipates, and you feel as if a small weight has been
      lifted off your shoulders.<br/><br/> With the sage's help, ${message}
      you need to recover the Staff of Pythonic Knowledge.
    `);
  }

  // Finally, persist current python world state
  world.setState('pythonWorldState', pystate);
};
