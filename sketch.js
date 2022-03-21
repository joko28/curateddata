let assetsImg = [];
let frame;
let phase = 'cover';
let myFont;
let coverSize = 50;
let studySize = 30;
let listSize = 30;
let retrySize = 30;
let img = 0;
let em = 0;
let ra = 0;
let ch = 0;
let wrds1 = '';
let wrds2 = '';
let wrds3 = '';
let example;

let emotions = ['sad', 'happy', 'angry', 'nervous', 'calm', 'anxious', 'excited', 'shame', 'guilt']

let ranks = ['Alpha', 'Beta', 'Gamma', 'Omega', 'Delta']

let characters = ['optimistic', 'curious', 'courageous', 'loyal', 'compassionate', 'respectful', 'brave', 'honest', 'unselfish', 'friendly', 'clean', 'trustworthy', 'patient', 'dependable', 'open-minded', 'evil', 'selfish', 'mean', 'dishonest', 'rude', 'greedy', 'impatient', 'dirty', 'disrespectful', 'jealous', 'lazy', 'grumpy', 'mysterious', 'obnoxious', 'annoying', 'compulsive']

//This function preloads all my images into an array.
//Preload runs before setup.
function preload() {
  for (i = 0; i <= 20; i++) {
    assetsImg[i] = loadImage('assets/' + [i] + '.jpg');
  }
  myFont = loadFont('assets/fonts/DMSerifDisplay-Regular.ttf');
}

function setup() {
  let canvas = createCanvas(windowWidth, windowWidth);
  canvas.parent('myCanvas');
  let button = createButton('click here to start');
  button.parent('button-holder');
  button.mousePressed(bt);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  textFont(myFont);
  textSize(50);
  textStyle(BOLD);
  stroke(0);
  fill(255);
  textResize();
  coverDisplay();
}

function draw() {}

function coverDisplay() {
  textSize(coverSize);
  textAlign(CENTER);
  //fill(0. 205, 255);
  text('Ready to begin', width * 0.5, height * 0.1);
  text('your wolf search?', width * 0.5, height * 0.15);
}

function bt() {
  phase = 'playing';
  img = int(random(assetsImg.length));
  em = int(random(emotions.length));
  ra = int(random(ranks.length));
  ch = int(random(characters.length));
  wrds1 = 'You are a/an emotionally ' + emotions[em];
  wrds2 = ' ' + ranks[ra];
  wrds3 = 'That is ' + characters[ch];
  console.log(wrds1);
  console.log(wrds2);
  console.log(wrds3);
  wolImage();
  divText();
}

function wolImage() {
  image(assetsImg[img], width * 0.5, height * 0.5, width, height);
}

function divText() {
  textSize(studySize);
  text('Is this you:', width / 2, height * 0.05);
  textSize(listSize);
  text(wrds1, width / 2, height * 0.85);
  text(wrds2, width / 2, height * 0.875);
  text(wrds3, width / 2, height * 0.9);
  textSize(retrySize);
  text('If it is not you, try again.', width / 2, height * 0.975);
}

 function textResize() {
   if (windowWidth > 1500) {
     coverSize = 40;
     studySize = 30;
     listSize = 20;
     retrySize = 20;
   } else if (windowWidth > 600)
    coverSize = 30;
    studySize = 20;
    listSize = 10;
    retrySize = 10;
  }

function windowResized() {
  resizeCanvas(windowWidth * 0.5, (windowWidth * 0.5) * 1.25);
  if (phase == 'cover') {
    coverDisplay();
  } else if (phase == 'playing') {
    wolImage();
    divText();
  }
  textResize();
}
