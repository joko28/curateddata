//Wolves & Arhchitecture

//let wolvesImg = [];
//let img = 0;
//This function preloads all my images into an array
//Preload runs before setup

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

//function preload() {
//for (i = 0; i <= 20; i++) {
//  wolvesImg[i] = loadImage('wolves/'+[i]+'.jpg');
//}
//}
function setup() {
  creatCanvas(1000, 1000);
  background('pink');
  textSize(32);
  text("click to randomize", 500, 500);
  //let canvas = createCanvas(1000, 1000);
  //canvas.parent('myCanvas');
  //frameRate(30);
  //imageMode(CENTER);

  //console.log(wolves[2]);
}

function draw() {
  //if (frameCount % 150 == 0) {
  //  img = int(random(wolvesImg.length));
  //}
  //image(wolvesImg[img], width/2, height/2.5, 400, 711);
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

function mousePressed() {
  if (wolves[0]) {
    //this displays random name & splices it out of array
    background(random(200, 255));
    randomIndex = int(random(wolves.length));
    text(wolves[randomIndex].name, 50, 50);
    wolves.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("WOLVES!", 50, 50);
  }
}
