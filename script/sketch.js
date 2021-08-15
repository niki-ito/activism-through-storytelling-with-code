let canvas;
let span;
let spanColor;

let fft;
let myAudio1;

function preload() {
  myAudio1 = loadSound("../assets/audio/visual-narrative/different.mp3");
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  span = select('#you');
}

function draw() {
  background(245,251,243);
  changeSpanColor();
  span.style("color", spanColor);
}

function changeSpanColor(){
  let r = mouseX/5;
  let g = 100;
  let b = mouseY/5;
  spanColor = "rgb(" + r + "," + g + "," + b + ")";
}
