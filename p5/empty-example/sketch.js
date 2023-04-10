let rectY = [];
let rectX = [];


function setup() {
  // put setup code here
  createCanvas(400,400);

}

function draw() {
  // put drawing code here
  background(50);
  noStroke();
  rectMode(CENTER);
  fill(225);
  
  for(let i = 0; i<rectY.length; i++){
    rect(rectX[i], rectY[i], 50, 25);
    rectY[i] += 1;

  }

  }
function mousePressed(){
  rectY.push(mouseY);
  rectX.push(mouseX);
}
