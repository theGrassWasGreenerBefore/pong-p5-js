const SCENE_WIDTH = 1200;
const SCENE_HEIGHT = 900;

const centerX = SCENE_WIDTH / 2;
const centerY = SCENE_HEIGHT / 2;

const KEYBOARD_SHIFT = 10;
const MOUSE_WHEEL_SHIFT = 4;
const BALL_SHIFT = 6;

const PLAYER_X_OFFSET = 120;
const PLAYER_SIZE = [14, 60];
const BALL_SIZE = [18, 18];
const NET_DASH = [15, 25];

const CONTROL_OPTIONS = {
  WS: "W+S",
  ARROW_KEYS: "Arrows UP+DOWN",
  MOUSE_WHEEL: "Mouse wheel",
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
