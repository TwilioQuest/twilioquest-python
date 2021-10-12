// Manage module-level state of whether or not the Sage conversation
// trigger has happened
let CONVO_TRIGGERED = false;

/**
 * Handle scripting and interaction for the great sage. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleSage(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'sageDialogTrigger' &&
    !worldState.greatSageInitialGreeting
  ) {
    world.disablePlayerMovement();
    await world.tweenCameraToPosition({
      x: 276,
      y: 418,
    });
    await world.wait(1000);

    // Trigger Sage conversation
    world.startConversation('ghost_intro', 'ghost2.png');
    CONVO_TRIGGERED = true;
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'ghost_intro' &&
    CONVO_TRIGGERED
  ) {
    await world.tweenCameraToPlayer();
    world.enablePlayerMovement();
    CONVO_TRIGGERED = false;
  }
}

module.exports = handleSage;
