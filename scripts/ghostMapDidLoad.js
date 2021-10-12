const WORLD_STATE_KEY = 'pythonWorldState';

module.exports = function (self, event, world) {
  const worldState = world.getState(WORLD_STATE_KEY);
  console.log(self);

  if (
    self.clueKey && 
    worldState.clues && 
    worldState.clues[self.clueKey]
  ) {
    // This clue has been found, hide the ghost
    self.sprite.body.enable = false;
    self.interactable = false;
    self.destroy();
  }
};
