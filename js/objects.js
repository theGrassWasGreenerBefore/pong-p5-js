const SCENE_WIDTH = 640;
const SCENE_HEIGHT = 480;

const centerX = SCENE_WIDTH / 2;
const centerY = SCENE_HEIGHT / 2;

const CHARACTER_SHIFT = 3;
const BALL_SHIFT = 3;

const getAxisOverlap = (coord1, coord2, size1, size2) => {
  const currentDistance = Math.abs(coord1 - coord2);
  const minimumSafeDistance = (size1 + size2) / 2;
  return currentDistance < minimumSafeDistance;
};

class Rectangle {
  constructor(
    position = [0, 0],
    sizeCaret = [0, 0],
    velocity = [0, 0],
  ) {
    this.position = this.createVector(...position);
    this.size = { width: sizeCaret[0], height: sizeCaret[1] };
    this.velocity = this.createVector(...velocity);
  };

  mount() {
    this.position.add(this.velocity);

    const { position, size } = this;
    const { x, y } = position;
    const { width, height } = size;

    return [x, y, width, height];
  }
};

class Character extends Rectangle {
  verticalShift(yDirection) {
    this.velocity = this.createVector(0, yDirection * CHARACTER_SHIFT);
  }
};

class Ball extends Rectangle {
  ballHit(otherCharacter) {
    const {
      position: { x: x1, y: y1 },
      velocity: ballVelocity,
    } = this;
    const {
      position: { x: x2, y: y2 },
      size: { height }
    } = otherCharacter;

    const hitDirection = this.createVector(x1 - x2, y1 - y2);
    this.velocity = hitDirection.normalize().mult(ballVelocity.mag());
  }

  hitTest(characters) {
    characters.forEach(otherCharacter => {
      const {
        position: { x: x1, y: y1 },
        size: { width: width1, height: height1 },
      } = this;
      const {
        position: { x: x2, y: y2 },
        size: { width: width2, height: height2 },
      } = otherCharacter;

      const isOverlapX = getAxisOverlap(x1, x2, width1, width2);
      const isOverlapY = getAxisOverlap(y1, y2, height1, height2);

      if (isOverlapX && isOverlapY) {
        this.ballHit(otherCharacter);
      }
    });
  }
};
