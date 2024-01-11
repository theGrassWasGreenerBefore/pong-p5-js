function setup() {
  createCanvas(SCENE_WIDTH, SCENE_HEIGHT);
}

function draw() {
  rectMode(CENTER);
  noStroke();
  background(0);
  fill(255);

  rect(...mainCharacter.mount());
}