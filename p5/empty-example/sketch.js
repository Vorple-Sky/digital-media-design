let hasClicked = false;
let xpos = 0;
let ypos = 0;

function setup() {
  // put setup code here
  createCanvas(400,400);
  

}

function draw() {
  // put drawing code here
  background(50);
  rectMode(CENTER);
  noStroke();
  fill(255);
  if(hasClicked){
    rect(xpos, ypos, 50, 25);
    ypos += 1;

  }

  }

function mousePressed(){
  hasClicked = true;
  xpos = mouseX;
  ypos = mouseY;
}