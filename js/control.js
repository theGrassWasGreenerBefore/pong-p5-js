const calcVerticalShift = (character) => {
  const isUpPressed = controlsPressed.has(`${character}|${CONTROL_KEYS.UP}`);
  const isDownPressed = controlsPressed.has(`${character}|${CONTROL_KEYS.DOWN}`);

  if (
    isUpPressed && isDownPressed ||
    !isUpPressed && !isDownPressed
  ) {
    return 0;
  }
  if (isUpPressed) {
    return -1;
  }
  return 1;
}

const keyStateChange = (setMethod) => {
  Object.keys(controlSettings).forEach(character => {
    const keys = controlSettings[character].keys;
    if (Object.keys(keys).includes(key)) {
      controlsPressed[setMethod](`${character}|${keys[key]}`);
      window[character].verticalShift(calcVerticalShift(character)); // TODO: refactor - no window
    }
  });
}

function keyPressed() {
  keyStateChange("add");
}

function keyReleased() {
  keyStateChange("delete");
}
