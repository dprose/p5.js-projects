var x = 0;
var y = 0;
var w = 20;

function setup() {
  createCanvas(401, 401);
  background(255);
  frameRate(60);
}

function draw() {
  var randomNum = Math.round(random(0, 255));
  console.log(randomNum);
  fill(randomNum);

  rect(x, y, w, w);
  x += w;

  if (x >= 400) {
    x = 0;
    y += w;
  }

  if (y >= 400) {
    noLoop();
  }
}

document.addEventListener("keypress", function(event) {
  if (event.charCode === 32) {
    location.reload();
  }
});
