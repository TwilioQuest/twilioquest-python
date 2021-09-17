function toggleDisplay(event, world, pystate) {
  if (!pystate.hasSeenStaffChest) {
    world.showEntities("arrow_staff", 0);
  } else {
    world.hideEntities("arrow_staff");
  }

  if (
    pystate.hasSeenStaffChest &&
    !pystate.hasSeenFirstNote &&
    !pystate.clues.one
  ) {
    world.showEntities("arrow_note_one", 0);
  } else {
    world.hideEntities("arrow_note_one");
  }

  // See if there are any collected research notes that need to get hidden
  world.destroyEntities((entity) => {
    const { researchClueNumber } = entity.instance;

    return researchClueNumber && pystate.clues[researchClueNumber];
  });
}

// Default Python world state
const DEFAULT_WORLD_STATE = {
  hasSeenStaffChest: false,
  canSolvePuzzle: false,
  cluesFound: 0,
  cluesTotal: 9,
  clues: {},
};

module.exports = function (event, world) {
  // Get current state of the python world
  const pystate = world.getState("pythonWorldState") || DEFAULT_WORLD_STATE;

  if (event.name === "playerDidInteract") {
    if (event.target.objectiveName === "python_basics_final") {
      pystate.hasSeenStaffChest = true;
    }

    if (event.target.firstResearchClue) {
      pystate.hasSeenFirstNote = true;
    }
  }

  // Handle display state of indicator arrows and clues
  toggleDisplay(event, world, pystate);

  // Update world state with convenience flag
  pystate.canSolvePuzzle = pystate.cluesFound === pystate.cluesTotal;

  // Finally, persist current python world state
  world.setState("pythonWorldState", pystate);
};
