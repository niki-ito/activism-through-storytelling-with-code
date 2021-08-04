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
  span = select("span");
  // myAudio1.play();
}

function draw() {
  background(245,251,243);
  changeSpanColor();
  span.style("color", spanColor)
  fill(31, 28, 112,100);

  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(spectrum[i] * 1.5 + 50, 173, 159, 80);
    rect(x, 0, width / spectrum.length, height);
  }
}

function changeSpanColor(){
  let r = mouseX/5;
  let g = 100;
  let b = mouseY/3;
  spanColor = "rgb(" + r + "," + g + "," + b + ")";
}
