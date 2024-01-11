const SCENE_WIDTH = 640;
const SCENE_HEIGHT = 480;

class Rectangle {
  constructor(position = { x: 0, y: 0 }, size = { width: 0, height: 0 }, vector = { x: 0, y: 0 }) {
    this.position = position;
    this.size = size;
    this.vector = vector;
  };

  mount() {
    const { position, size, vector } = this;
    const { x, y } = position;
    const { width, height } = size;
    const { x: vectorX, y: vectorY } = vector;

    return [x + vectorX, y + vectorY, width, height];
  }
};

const mainCharacter = new Rectangle(
  { x: 40, y: 240 },
  { width: 20, height: 140 }
);
