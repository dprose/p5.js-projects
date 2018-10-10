var x = 0;
var y = 0;
var w = 50;

function setup() {
  createCanvas(400, 400);
  background(255);
  frameRate(60);
}

function draw() {
  var randomNum = random(1);
  console.log(randomNum);
  if (randomNum < 0.5) {
    fill(0);
    stroke(0);
  } else {
    fill(255);
    stroke(255);
  }
  rect(x, y, w, w);
  rect(400 - x - w, y, w, w);
  x += w;

  if (x >= 200) {
    x = 0;
    y += w;
  }

  if (y >= 400) {
    noLoop();
  }
}

document.addEventListener("keypress", event => {
  if (event.charCode === 32) {
    location.reload();
  }
});
