const SCENE_WIDTH = 640;
const SCENE_HEIGHT = 480;

const centerX = SCENE_WIDTH / 2;
const centerY = SCENE_HEIGHT / 2;

const CHARACTER_SHIFT = 4.5;
const BALL_SHIFT = 4;

const CONTROL_OPTIONS = {
  WS: "W+S",
  ARROW_KEYS: "Arrows UP+DOWN",
};

const CONTROL_KEYS = {
  UP: "UP",
  DOWN: "DOWN",
}

const keySets = [
  {
    id: CONTROL_OPTIONS.WS,
    keys: {
      w: CONTROL_KEYS.UP,
      s: CONTROL_KEYS.DOWN,
    }
  },
  {
    id: CONTROL_OPTIONS.ARROW_KEYS,
    keys: {
      ArrowUp: CONTROL_KEYS.UP,
      ArrowDown: CONTROL_KEYS.DOWN,
    }
  },
];

const players = [];

let controlsPressed = new Set();
