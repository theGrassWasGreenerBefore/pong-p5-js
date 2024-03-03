function setup() {
  Rectangle.prototype.createVector = createVector;

  players.push(
    new Paddle(
      [PADDLE_X_OFFSET, centerY],
      PADDLE_SIZE,
      "player1",
      CONTROL_OPTIONS.WS,
    ),
    new Paddle(
      [SCENE_WIDTH - PADDLE_X_OFFSET, centerY],
      PADDLE_SIZE,
      "player2",
      CONTROL_OPTIONS.MOUSE_WHEEL,
    ),
  );

  ball = new Ball(
    ...generateServeCoordinates(),
  );

  createCanvas(SCENE_WIDTH, SCENE_HEIGHT);
}

function draw() {
  frameRate(FRAME_RATE);
  rectMode(CENTER);
  background(0);

  // score
  textFont("Pong Score"); // TODO: fetch font in preload when moved to modules
  textSize(TEXT_SIZE);
  textAlign(RIGHT, TOP);
  text(score[0], TEXT_LEFT_1, TEXT_TOP);
  text(score[1], TEXT_LEFT_2, TEXT_TOP);

  // net
  stroke(255);
  strokeWeight(4);
  noFill();
  drawingContext.setLineDash(NET_DASH);
  line(SCENE_WIDTH / 2, 0, SCENE_WIDTH / 2, SCENE_HEIGHT);

  // moving objects
  noStroke();
  fill(255);

  players.forEach(player => {
    player.shiftByVelocity();
    rect(...player.mount());
    player.hitFrameTest();
  });

  ball.shiftByVelocity(players);
  ball.drawIfShown(rect);

  if (ball.isShown) {
    ball.hitTest(players);
  }
  ball.hitFrameTest();

  // ball increment due to vectors of ball and paddles
  // increment paddles
}
