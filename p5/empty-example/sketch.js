let origx = 200;
let origy = 100;
let destx = 200;
let desty = 300;

function setup() {
  // put setup code here
  createCanvas(400,400);
  noLoop();
}

function draw() {
  // put drawing code here
  background(255);
  fill(255);
  strokeWeight(3);

  for (let i = 25; i <400; i+=25){
    stroke(50);
    line(i, 200, origx, origy);
    stroke(240);
    line(i, 200, destx, desty);

  }



  }