const conversationOnInteract = require("../../scripts/conversationOnInteract");

module.exports = {
  spriteSheets: {
    tq_python_ghost1: {
      fileName: "NPC_PythonicGhost1.png",
      frameDimensions: {
        width: 32,
        height: 32,
      },
    },
  },
  animations: {
    idle: {
      frames: [0, 1, 2, 3],
      frameRate: 4,
    },
  },
  events: {
    onPlayerDidInteract: conversationOnInteract,
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tq_python_ghost1",
    },
    idleAnimations: {
      animations: { idle: 100 },
      minIdleTime: 2000,
      maxIdleTime: 4000,
    },
  },
};
