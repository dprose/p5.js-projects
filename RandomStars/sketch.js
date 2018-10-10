function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  fill(random(255));
  var starSize = random(1, 10);
  ellipse(random(800), random(800), starSize, starSize);
}