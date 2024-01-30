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
}

const keyStateChange = (setMethod) => {
  players.forEach(player => {
    const { keys } = keySets.find(({ id }) => id === player.controlOption);
    if (Object.keys(keys).includes(key)) {
      controlsPressed[setMethod](`${player.name}|${keys[key]}`);
      player.verticalShift(calcVerticalShift(player.name));
    }
  });
}

function keyPressed() {
  keyStateChange("add");
}

function keyReleased() {
  keyStateChange("delete");
}
