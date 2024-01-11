const SCENE_WIDTH = 640;
const SCENE_HEIGHT = 480;

class Rectangle {
  constructor(position = { x: 0, y: 0 }, size = { width: 0, height: 0 }) {
    this.position = position;
    this.size = size;
  };

  mount() {
    const { position, size } = this;
    const { x, y } = position;
    const { width, height } = size;

    return [x, y, width, height];
  }
}

const mainCharacter = new Rectangle(
  { x: 40, y: 240 },
  { width: 20, height: 140 }
);
