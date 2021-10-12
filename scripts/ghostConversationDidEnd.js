module.exports = function (self, event, world) {
  if (!event.npc || event.npc.conversation !== self.conversation) {
    // This isn't our conversationalist
    return;
  }

  // If the ghost is a clue holder, make them phase out after the conversation
  // ends
  if (self.clueKey) {
    const tween = world.__internals.level.game.add.tween(self.sprite).to({
      alpha: 0,
      tint: 0x0000ff
    }, 2500, 'Linear', true);
    self.sprite.body.enable = false;
    self.interactable = false;
    tween.onComplete.addOnce(() => {
      self.destroy();
    });
  }
};
