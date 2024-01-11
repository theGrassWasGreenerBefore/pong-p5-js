const SCENE_WIDTH = 640;
const SCENE_HEIGHT = 480;

const CHARACTER_SHIFT = 3;

const applyVector = (character) => {
  const { position, vector } = character;
  const { x: positionX, y: positionY } = position;
  const { x: vectorX, y: vectorY } = vector;

  const x = positionX + vectorX;
  const y = positionY + vectorY;

  character.position = { x, y };
}

class Rectangle {
  constructor(
    position = { x: 0, y: 0 },
    size = { width: 0, height: 0 },
    vector = { x: 0, y: 0 }
  ) {
    this.position = position;
    this.size = size;
    this.vector = vector;
  };

  mount() {
    applyVector(this);

    const { position, size } = this;
    const { x, y } = position;
    const { width, height } = size;

    return [x, y, width, height];
  }
};

class Character extends Rectangle {
  verticalShift(yDirection) {
    this.vector = { x: 0, y: yDirection * CHARACTER_SHIFT };
  }
};

const mainCharacter = new Character(
  { x: 40, y: 240 },
  { width: 20, height: 140 }
);
