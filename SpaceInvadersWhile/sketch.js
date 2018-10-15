function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  frameRate(120);
}

var xCenter = 40;
var yCenter = 40;
var yOffset = -2;
var w = 10;

function draw() {
  noStroke();
  while (yCenter < 400) {
    while (xCenter <= 800) {
      //Generate a space invader
      while (yOffset <= 2) {
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

        yOffset++;
      }

      //Move to the right
      yOffset = -2;
      xCenter += w * 8;
    }
    xCenter = 40;
    yCenter += 8 * w;
  }
  noLoop();
}

//Reload page if spacebar is pressed
document.addEventListener("keypress", function(event) {
  if (event.charCode === 32) {
    location.reload();
  }
});
