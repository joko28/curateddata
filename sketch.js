let wolves = [{
  name: "WOLF",
  color: "pink"
}, {
  name: "ZOE",
  color: "purple"
}, {
  name: "DAKOTA",
  color: "brown"
}, {
  name: "STAR",
  color: "yellow"
}, {
  name: "CRYSTAL",
  color: "gray"
}, {
  name: "LUNA",
  color: "gray"
}];

let randomIndex;

function setup() {
  createCanvas(1000, 1000);
  background('pink');
  textSize(32);
  text("click to randomize", 500, 500);

}

function draw() {
  //background('pink');

  drawCloud();
}

function drawCloud() {
  push();
  fill(255);
  noStroke();
  ellipse(250, 250, 350, 150);
  ellipse(180, 200, 130, 100);
  ellipse(320, 220, 140, 130);
  ellipse(250, 190, 120, 100);
  pop();
}

function mousePressed(){
  if (wolves[0]){
    //this displays random name & splices it out of array
    background(random(200, 255));
    randomIndex = int(random(wolves.length));
    text(wolves[randomIndex].name, 500, 500);
    wolves.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("WOLVES!", 500, 500);
  }
}
