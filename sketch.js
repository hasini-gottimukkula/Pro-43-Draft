var hour, minute, second;

//Calculating time using predefined func from p5.js
hr = hour();
mn = minute();
sc = second();

angleMode(DEGREES);
Map();
function setup() {
  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);
  scAngle = map(sc, 0, 60, 0, 360);

  //drawing seconds hand 
  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();




  drawSprites();
}