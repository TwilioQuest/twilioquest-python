// Manage module-level state of whether or not the Toledo conversation
// trigger has happened
let T_CONVO_TRIGGERED = false;

/**
 * Handle scripting and interaction for the first room of the temple. 
 * 
 * @param {LifecycleEvent} event - lifecycle event emitted by TQ
 * @param {WorldAPI} world - TQ World API
 * @param {object} worldState - current game world state (mutate to change)
 */
async function handleToledo(event, world, worldState) {
  if (
    event.name === 'triggerAreaWasEntered' &&
    event.target.key === 'toledoDialogTrigger' &&
    !worldState.toledoInitialGreeting
  ) {
    world.disablePlayerMovement();
    await world.tweenCameraToPosition({
      x: 684,
      y: 166,
    });
    await world.wait(1000);

    // Trigger Toledo conversation
    world.startConversation('vanPossumDefault', 'vanPossum.png');
    T_CONVO_TRIGGERED = true;
  }

  if (
    event.name === 'conversationDidEnd' &&
    event.npc.conversation === 'vanPossumDefault' &&
    T_CONVO_TRIGGERED
  ) {
    await world.tweenCameraToPlayer();
    world.enablePlayerMovement();
    T_CONVO_TRIGGERED = false;
  }
}

module.exports = handleToledo;
