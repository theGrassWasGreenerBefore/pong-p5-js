class Rectangle {
  constructor(x, y, width, height) {
    this.position = {};
    this.position.x = x;
    this.position.y = y;
    this.width = width;
    this.height = height;
  };

  rect() {
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}

const mainCharacter = new Rectangle(40, 240, 20, 140);
