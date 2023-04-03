let xpos = 80;
let xstep = 30;
let ypos = 140;
let ystep = 30;


function setup() {
  // put setup code here
  createCanvas(400,400);
  noLoop();
}

function draw() {
  // put drawing code here
  background(255);
  fill(50);
  noStroke();

  for(let j =0; j <5; j++){
    for (let i = 0; i < 9; i++){
      ellipse(xpos + (xstep*i), ypos + (ystep*j), 20, 20)

    }
  }

  }