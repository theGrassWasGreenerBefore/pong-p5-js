const keysPressed = new Set();

const calcVerticalShift = () => {
  if (
    keysPressed.has(UP_ARROW) && keysPressed.has(DOWN_ARROW) ||
    !keysPressed.has(UP_ARROW) && !keysPressed.has(DOWN_ARROW)
  ) {
    return 0;
  }
  if (keysPressed.has(UP_ARROW)) {
    return -1;
  }
  return 1;
}

function keyPressed() {
  if ((keyCode === UP_ARROW) || (keyCode === DOWN_ARROW)) {
    if (!keysPressed.has(keyCode)) {
      keysPressed.add(keyCode);
    }

    mainCharacter.verticalShift(calcVerticalShift());
  }
}

function keyReleased() {

  if ((keyCode === UP_ARROW) || (keyCode === DOWN_ARROW)) {
    keysPressed.delete(keyCode);
    mainCharacter.verticalShift(calcVerticalShift());
  }
}
