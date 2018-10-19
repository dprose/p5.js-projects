var w = "600";
var h = "400";
var x = 200;
var y = 300;
var xVel = 0;
var yVel = 0;
var xAcc = random(-1, 1);
var increment = 0.1;

function setup() {
  createCanvas(w, h);
  strokeCap(SQUARE);
}

// frameRate(2);
background(223, 79, 65);
fill(0);

// function draw() {
//   fill(0);
//   x = random(w);
//   y = random(h);
//   xVel = random(-1, 1);
//   yVel = random(-1, 1);
//   while (x < w && y < h && x > 0 && y > 0) {
//     ellipse(x, y, 2);
//     x += xVel;
//     y += yVel;

//     xVel += random(-increment, increment);
//     yVel += random(-increment, increment);
//   }
//   x = 200;
//   y = 300;
// }

function draw() {
  //draw element
  background(223, 79, 65);
  ellipse(x, y, 2);

  //adjust acceleration based on position

  //calculate new velocities
  xVel += xAcc;

  //calculate new positions
  x += xVel;
  // y += yVel;
}
