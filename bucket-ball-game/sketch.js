//ball config
var x = 0;
var y = 200;
var ballWidth = 40;

//ball path config
var xVel;
var yVel;
var yAcc = 1;
var xVelMax = 17;
var yVelMax = 18;

//bucket config
var bucketWidth = 200;
var bucketIncrement = 10;

//score keeping config
var score = 0;

//initial setup
function setup() {
  createCanvas(800, 400);
  frameRate(30);
  rectMode(CENTER);
  xVel = random(1, xVelMax);
  yVel = random(-1, -yVelMax);
}

function draw() {
  //ball makes it into the bucket
  if (
    y > 360 && //if ball reaches rim of bucket
    x + ballWidth / 2 < mouseX + bucketWidth / 2 && //if right edge of ball is inside bucket
    x - ballWidth / 2 > mouseX - bucketWidth / 2 //if left edge of ball is inside bucket
  ) {
    if (bucketWidth <= ballWidth + 40) {
      //if bucket is too small for another round
      endGame();
    } else {
      advanceGame();
    }
  }

  //ball falls off the screen
  if (y > 400) {
    resetGame();
  }
  //increment position and velocity variables
  x += xVel;
  y += yVel;
  yVel += yAcc;

  //render score tally
  background(0);
  for (i = 1; i <= score; i++) {
    ellipse(i * 20, 20, 15);
  }

  //render ball and bucket
  ellipse(x, y, ballWidth);
  rect(mouseX, 380, bucketWidth, 40);
}

function advanceGame() {
  //reset ball position
  x = 0;
  y = 200;

  //generate new ball velocities
  xVel = random(1, xVelMax);
  yVel = random(-1, -yVelMax);

  //increment score
  score++;

  //decrement bucket width
  bucketWidth -= bucketIncrement;

  console.log(score);
}

function resetGame() {
  //reset ball position
  x = 0;
  y = 200;

  //generate new ball velocities
  xVel = random(1, xVelMax);
  yVel = random(-1, -yVelMax);

  //reset score
  score = 0;

  //reset bucket width
  bucketWidth = 200;

  console.log("Game Reset");
}

function endGame() {
  console.log(score);
  noLoop();
  window.alert("You Win!");
}
