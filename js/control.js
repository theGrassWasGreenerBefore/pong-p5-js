function keyPressed() {
  if (keyCode === UP_ARROW) {
    mainCharacter.verticalShift(-1);
  }
  if (keyCode === DOWN_ARROW) {
    mainCharacter.verticalShift(1);
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    mainCharacter.verticalShift(0);
  }
  if (keyCode === DOWN_ARROW) {
    mainCharacter.verticalShift(0);
  }
}
