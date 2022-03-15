//let wolvesImg = [];
//let frame;
//let names = [{
  //name: "WOLF",
  //color: "pink"
//}, {
  //name: "ZOE",
  //color: "purple"
//}, {
  //name: "DAKOTA",
  //color: "brown"
//}, {
  //name: "STAR",
  //color: "yellow"
//}, {
  //name: "CRYSTAL",
  //color: "gray"
//}, {
  //name: "LUNA",
  //color: "gray"
//}];

//let randomIndex;

let wolvesImg = [];
let frame;
let phase = 'cover';
let myFont;
let coverSize;
let studySize;
let listSize;
let retrySize;
let img = 0;
let e = 0;
let r = 0;
let c = 0;
let wrds1 = '';
let wrds2 = '';
let wrds3 = '';
let example;

let emotions = ['Sad', 'Happy', 'Angry', 'Nervous', 'Calm', 'Anxious', 'Excited', 'Shame', 'Guilt']

let ranks = ['Alpha', 'Beta', 'Gamma', 'Omega', 'Delta']

let character = ['Optimistic', 'Curious', 'Courageous', 'Loyal', 'Compassionate','Respectful', 'Brave', 'Honest', 'Unselfish', 'Friendly', 'Clean', 'Trustworthy', 'Patient', 'Dependable', 'Open-minded', 'Evil', 'Selfish', 'Mean', 'Dishonest', 'Rude', 'Greedy', 'Impatient', 'Dirty', 'Disrespectful', 'Jealous', 'Lazy', 'Grumpy', 'Mysterious', 'Obnoxious', 'Annoying', 'Compulsive']


//This function preloads all my images into an array.
//Preload runs before setup.
function preload() {
  for (i = 0; i <= 20; i++) {
    plantImg[i] = loadImage('assets/' + [i] + '.jpg');
  }
  frame = loadImage('assets/frame2.png');
  myFont = loadFont('assets/fonts/DancingScript-Regular.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth*0.5, (windowWidth*0.5)*1.25);
  canvas.parent('myCanvas');
  let button = createButton('Click here to see your fate.');
  button.parent('button-holder');
  button.mousePressed(divination);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(myFont);
  textSize(20);
  textResize();
  coverDisplay();
}

function draw() {}

function divination() {
  phase = 'playing';
  img = int(random(plantImg.length));
  e = int(random(emotions.length));
  r = int(random(ranks.length));
  c = int(random(character.length));
  wrds1 = 'You are a emotionally' + rootStem[rS] + ' ' + fortunes[fort];
  wrds2 = 'A/an ' + leaves[leaf] + ' ' + fortunes2[fort2];
  wrds3 = 'That is ' + flowers[flow] + ' ' + fortunes3[fort3];
  console.log(wrds1);
  console.log(wrds2);
  console.log(wrds3);
  wolvesImage();
  divText();
}

function coverDisplay() {
  //background(220);
  image(frame, width*0.5,height*0.5, width, height);
  textSize(coverSize);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to begin your reading.', width * 0.5, height * 0.5);
}

function wolvesImage() {
  //background(255);
  image(frame, width*0.5, height*0.5, width, height);
  image(wolvesImg[img], width * 0.5, height * 0.4, width*0.2812, width*0.5);
}

function divText() {
  textSize(studySize);
  text('Is this you:', width / 2, height * 0.625);
  textSize(listSize);
  text(wrds1, width / 2, height * 0.675);
  text(wrds2, width / 2, height * 0.7);
  text(wrds3, width / 2, height * 0.725);
  textSize(retrySize);
  text('If it is not you, try again.', width / 2, height * 0.8);
}

function textResize() {
  if (windowWidth > 1500) {
    coverSize = 40;
    studySize = 30;
    listSize = 18;
    retrySize = 16;
  } else if (windowWidth > 1200) {
    coverSize = 34;
    studySize = 26;
    listSize = 14;
    retrySize = 12;
  } else if (windowWidth > 900) {
    coverSize = 30;
    studySize = 20;
    listSize = 12;
    retrySize = 10;
  } else if (windowWidth > 600) {
    coverSize = 24;
    studySize = 18;
    listSize = 10;
    retrySize = 9;
  }
}

function windowResized() {
  resizeCanvas(windowWidth*0.5, (windowWidth*0.5)*1.25);
  if (phase == 'cover') {
    coverDisplay();
  } else if (phase == 'playing') {
    divImage();
    divText();
  }
  textResize();
}

//function mousePressed(){
  //if (wolves[0]){
    //this displays random name & splices it out of array
    //background(random(200, 255));
    //randomIndex = int(random(wolves.length));
    //text(wolves[randomIndex].name, 500, 500);
    //wolves.splice(randomIndex, 1);
  //} else {
    //background(random(200, 255));
    //text("WOLVES!", 500, 500);
  //}
//}
