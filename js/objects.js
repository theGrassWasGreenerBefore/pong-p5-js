const mainCharacter = {
  position: { x: 40, y: 240 },
  width: 20,
  height: 140,
  speed: 0,
  rect: function () {
    rect(mainCharacter.position.x, mainCharacter.position.y, mainCharacter.width, mainCharacter.height);
  }
};
