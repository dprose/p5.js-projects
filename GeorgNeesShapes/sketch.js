//These variables will hold the beginning and end point of each line
var x1;
var y1;
var x2;
var y2;
//xc and yc are the coordinates of the center of the design
var xc = 50;
var yc = 50;
var w = 40; //Set width of design
var count = 0; //Count number of points drawn

function setup() {
  createCanvas(800, 800);
  background(255);
  //We need to pick a point to get the design started
  x2 = xc + random(-w / 2, w / 2);
  y2 = yc + random(-w / 2, w / 2);
}

function draw() {
  while (yc <= 800) {
    while (xc <= 800 - w) {
      //We picked one point in setup, and so we need to pick 7 more points
      while (count < 7) {
        //Set start point of new line equal to end point of last line
        x1 = x2;
        y1 = y2;
        //Pick new end point
        x2 = xc + random(-w / 2, w / 2);
        y2 = yc + random(-w / 2, w / 2);
        line(x1, y1, x2, y2);
        count++;
      }
      count = 0;
      xc += 100;
      x2 = xc + random(-w / 2, w / 2);
      y2 = yc + random(-w / 2, w / 2);
      if (random(1) < 0.5) {
        stroke(255, 0, 255);
      }
    }
    xc = 50;
    yc += w * 2;
    x2 = xc + random(-w / 2, w / 2);
    y2 = yc + random(-w / 2, w / 2);
  }
  noLoop();
}

//Reload page if spacebar is pressed
document.addEventListener("keypress", function(event) {
  if (event.charCode === 32) {
    location.reload();
  }
});
