const calcVerticalShift = (playerName) => {
  const isUpPressed = controlsPressed.has(`${playerName}|${CONTROL_KEYS.UP}`);
  const isDownPressed = controlsPressed.has(`${playerName}|${CONTROL_KEYS.DOWN}`);

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
};

const keyStateChange = (setMethod) => {
  players.forEach(player => {
    const keys = keySets.find(({ id }) => id === player.controlOption) ?.keys ?? {};
    const keyCodeString = String(keyCode);

    if (Object.keys(keys).includes(keyCodeString)) {
      controlsPressed[setMethod](`${player.name}|${keys[keyCodeString]}`);
      player.verticalShift(calcVerticalShift(player.name));
    }
  });
};

function keyPressed() {
  keyStateChange("add");
}

function keyReleased() {
  keyStateChange("delete");
}

function mouseWheel({ delta }) {
  players.forEach(player => {
    if (player.controlOption === CONTROL_OPTIONS.MOUSE_WHEEL) {
      player.verticalShift(Math.sign(delta) * MOUSE_WHEEL_SHIFT);
    }
  });
  return false;
}