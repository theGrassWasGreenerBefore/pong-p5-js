const mainCharacter = {
  position: { x: 40, y: 240 },
  width: 20,
  height: 140,
  speed: 0,
  rect: function () {
    rect(this.position.x, this.position.y, this.width, this.height);
  }
};
