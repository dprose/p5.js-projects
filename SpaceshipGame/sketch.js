//wall animation setup
var topPos = 0;
var bottomPos = 400;
var vel = 1;
var frameNum = 0;

//spaceship animation setup
var xPosShip = 200;
var yPosShip = 200;
var yVelShip = 0;
var yAccShip = .2;

function setup(){
  createCanvas(400,400);
  strokeWeight(2);
  rectMode(CORNERS);
}

function draw() {
  //reset walls if spaceship comes in contact with them
  //else, modulate walls up and down
  if(yPosShip + 8 >= bottomPos || yPosShip - 15 <= topPos){
    topPos = 0;
    bottomPos = 400;
  } else if(bottomPos - topPos > 100){
    topPos += vel;
    bottomPos -= vel;
  } else if (frameNum%200 < 100) {
    topPos += vel;
    bottomPos += vel;
  } else {
    topPos -= vel;
    bottomPos -= vel;
  }
  
  
  //acceleration control logic
  if(yPosShip > (bottomPos + topPos)/2) {
    yVelShip -= yAccShip;
  } else {
    yVelShip += yAccShip;
  }
  
  yPosShip += yVelShip;
  
  
  background(255);  //render background
  
  stroke(75);  //render walls
  fill(75);
  rect(0,0,width,topPos);
  rect(0,height,width,bottomPos);
  
  stroke(150);  //render spaceship
  fill(255);
  ellipse(xPosShip, yPosShip - 5, 20, 15);
  fill(200);
  ellipse(xPosShip, yPosShip, 50, 15);
  
  frameNum ++;  //increment frame counter
}