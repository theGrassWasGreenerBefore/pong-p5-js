const getAxisOverlap = (coord1, coord2, size1, size2) => {
  const currentDistance = Math.abs(coord1 - coord2);
  const minimumSafeDistance = (size1 + size2) / 2;
  return currentDistance < minimumSafeDistance;
};

class Rectangle {
  constructor(
    position = [0, 0],
    sizeCaret = [0, 0],
  ) {
    this.position = this.createVector(...position);
    this.size = { width: sizeCaret[0], height: sizeCaret[1] };
    this.velocity = this.createVector(0, 0);
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
  constructor(
    position,
    sizeCaret,
    name = "",
    controlOption = CONTROL_OPTIONS.WS,
  ) {
    super(position, sizeCaret);
    this.name = name;
    this.controlOption = controlOption;
  }

  verticalShift(yDirection) {
    this.velocity.y = yDirection * CHARACTER_SHIFT;
  }

  hitFrameTest() {
    const { position: { y } } = this;
    const { velocity: { y: velocityY } } = this;
    const { size: { height } } = this;

    const topLimit = height / 2;
    const bottomLimit = SCENE_HEIGHT - height / 2;

    const isHigherThanTop = (velocityY <= 0) && (y <= topLimit);
    const isLowerThanBottom = (velocityY >= 0) && (y >= bottomLimit);

    if (isHigherThanTop || isLowerThanBottom) {
      this.velocity.y = 0;
      this.position.y = isHigherThanTop ? topLimit : bottomLimit;
    }
  }

  mount() {
    if (this.controlOption === CONTROL_OPTIONS.MOUSE_WHEEL) {
      const resultMount = super.mount();
      this.velocity.y = 0;
      return resultMount;
    }
    return super.mount();
  }
};

class Ball extends Rectangle {
  constructor(
    position,
    sizeCaret,
    velocity = [0, 0],
  ) {
    super(position, sizeCaret);
    this.velocity = this.createVector(...velocity);
  }
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

  hitFrameTest() {
    const {
      position: { x, y },
      size: { width, height },
    } = this;

    if (this.position.x < width / 2) {
      // TODO: score Left
    }
    if (this.position.x > SCENE_WIDTH - width / 2) {
      // TODO: score Right
    }
    if ((this.position.y < height / 2) && (this.velocity.y < 0)) {
      this.velocity.y *= -1;
    }
    if ((this.position.y > SCENE_HEIGHT - height / 2) && (this.velocity.y > 0)) {
      this.velocity.y *= -1;
    }
  }
};
