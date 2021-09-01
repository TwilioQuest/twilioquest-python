module.exports = {
  animations: {},
  spriteSheets: {
    tq_python_rock: {
      fileName: "rock.png",
      frameDimensions: {
        width: 48,
        height: 48,
      },
    },
  },
  events: {
    onPlayerDidInteract: (self, event, world) => {
      if (self === event.target) {
      }
    },
  },
  properties: {
    sprite: {
      defaultFrameIndex: 0,
      spriteSheet: "tq_python_rock",
      layers: [],
    },
  },
};

// TODO:
// Why does the temple_entry map crash upon loading
// set up local_config to load directly in there for quicker testing!
// create van possom object
// create ghost people objects
