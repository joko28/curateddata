let wolvesImg = [];
let frame;
let phase = 'cover';
//let myFont;
let coverSize;
let studySize;
let listSize;
let retrySize;
let img = 0;
let em = 0;
let ra = 0;
let ch = 0;
let wrds1 = '';
let wrds2 = '';
let wrds3 = '';
let example;

let emotions = ['Sad', 'Happy', 'Angry', 'Nervous', 'Calm', 'Anxious', 'Excited', 'Shame', 'Guilt']

let ranks = ['Alpha', 'Beta', 'Gamma', 'Omega', 'Delta']

let characters = ['Optimistic', 'Curious', 'Courageous', 'Loyal', 'Compassionate','Respectful', 'Brave', 'Honest', 'Unselfish', 'Friendly', 'Clean', 'Trustworthy', 'Patient', 'Dependable', 'Open-minded', 'Evil', 'Selfish', 'Mean', 'Dishonest', 'Rude', 'Greedy', 'Impatient', 'Dirty', 'Disrespectful', 'Jealous', 'Lazy', 'Grumpy', 'Mysterious', 'Obnoxious', 'Annoying', 'Compulsive']

//This function preloads all my images into an array.
//Preload runs before setup.
function preload() {
  for (i = 0; i <= 20; i++) {
    wolvesImg[i] = loadImage('wolves/0.jpg' + [i] + '.jpg');
  }
}

function setup() {
  //createCanvas(400, 400);
  let canvas = createCanvas(windowWidth*0.5, (windowWidth*0.5)*1.25);
  canvas.parent('myCanvas');
  let button = createButton('click me');
  button.parent('button-holder');
  button.mousePressed(bt);
  frameRate(30);
  imageMode(CENTER);
  textAlign(CENTER);
  textSize(20);
  textResize();
  coverDisplay();
}

function draw() {}

function bt() {
  phase = 'playing';
  img = int(random(wolvesImg.length));
  em = int(random(emotions.length));
  ra = int(random(ranks.length));
  ch = int(random(characters.length));
  wrds1 = 'You are a emotionally' + emotions[em];
  wrds2 = 'A/an ' + ranks[ra];
  wrds3 = 'That is ' + characters[ch];
  console.log(wrds1);
  console.log(wrds2);
  console.log(wrds3);
  wolImage();
  divText();
}

function coverDisplay() {
  //image(frame, width*0.5,height*0.5, width, height);
  textSize(coverSize);
  text('Press the button below', width * 0.5, height * 0.4);
  text('to begin your reading.', width * 0.5, height * 0.5);
}

function wolImage() {
  //image(frame, width*0.5, height*0.5, width, height);
  image(wolvesImg[img], width * 0.5, height * 0.5, width*0.5, width*0.5);
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
    wolImage();
    divText();
  }
  textResize();
}
