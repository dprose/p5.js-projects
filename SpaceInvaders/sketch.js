function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
}

var xCenter = 200;
var yCenter = 200;
var yOffset = -2;
var w = 20;

function draw() {
  noStroke();

  //Generate center square
  if (random(1) < 0.5) {
    fill(0);
  } else {
    fill(255);
  }
  rect(xCenter, yCenter + yOffset * w, w, w);

  //Generate squares adjacent to center
  if (random(1) < 0.5) {
    fill(0);
  } else {
    fill(255);
  }
  rect(xCenter - w, yCenter + yOffset * w, w, w);
  rect(xCenter + w, yCenter + yOffset * w, w, w);

  //Generate squares two spaces removed from center
  if (random(1) < 0.5) {
    fill(0);
  } else {
    fill(255);
  }
  rect(xCenter - 2 * w, yCenter + yOffset * w, w, w);
  rect(xCenter + 2 * w, yCenter + yOffset * w, w, w);

  //Increment offset or stop loop
  if (yOffset < 2) {
    yOffset++;
  } else {
    noLoop();
  }
}

document.addEventListener("keypress", function(event) {
  if (event.charCode === 32) {
    location.reload();
  }
});
