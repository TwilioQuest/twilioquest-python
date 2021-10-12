const handleToldeo = require('./events/handleToldeo');

// Default Python world state
const DEFAULT_WORLD_STATE = {
  hasSeenStaffChest: false,
  canSolvePuzzle: false,
  cluesFound: 0,
  cluesTotal: 9,
  clues: {},
  toledoInitialGreeting: false
};

module.exports = function (event, world) {
  // Get current state of the python world
  const pystate = world.getState('pythonWorldState') || DEFAULT_WORLD_STATE;

  // Wire up event scripting for the intro area
  handleToldeo(event, world, pystate);

  // Update world state with convenience flag
  pystate.canSolvePuzzle = pystate.cluesFound === pystate.cluesTotal;

  // Finally, persist current python world state
  world.setState('pythonWorldState', pystate);
};
