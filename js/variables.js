const SCENE_WIDTH = 1200;
const SCENE_HEIGHT = 900;

const FRAME_RATE = 60;
const SECONDS_PAUSE = 2;
const PAUSE_INITIAL_VALUE = FRAME_RATE * SECONDS_PAUSE;

const centerX = SCENE_WIDTH / 2;
const centerY = SCENE_HEIGHT / 2;

const KEYBOARD_SHIFT = 10;
const MOUSE_WHEEL_SHIFT = 4;
const BALL_SHIFT = 6;

const NET_DASH = [15, 25];
const PLAYER_X_OFFSET = 120;
const PLAYER_SIZE = [14, 60];
const BALL_SIZE = [18, 18];
const BALL_START_VELOCITY = [5, 10];

const TEXT_SIZE = 130;
const TEXT_TOP = 85;
const TEXT_LEFT_1 = 430;
const TEXT_LEFT_2 = 1030;

const generateServeCoordinates = (preferredXDirection) => {
  const xDirection = preferredXDirection ? preferredXDirection : Math.sign(Math.random() - 0.5);
  const yDirection = Math.sign(Math.random() - 0.5);

  const xVelocity = BALL_START_VELOCITY[0] * xDirection;
  const yVelocity = BALL_START_VELOCITY[1] * yDirection;

  const yPosition = Math.random() * (SCENE_HEIGHT - BALL_SIZE[1]) - BALL_SIZE[1];
  return [
    [centerX, yPosition],
    BALL_SIZE,
    [xVelocity, yVelocity],
  ];
}

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
const score = [0, 0];

let controlsPressed = new Set();
