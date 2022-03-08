function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('pink');

  drawCloud();
}

function drawCloud() {
  push();
  fill(255);
  noStroke();
  ellipse(250, 250, 350, 150);
  ellipse(180, 200, 130, 100);
  ellipse(320, 220, 140, 130);
  ellipse(250, 190, 120, 100);
  pop();
}