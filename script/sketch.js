let canvas;
let span;
let spanColor;

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
  cursorObject();
}

function changeSpanColor(){
  let r = mouseX/2;
  let g = 200;
  let b = mouseY/5;
  spanColor = "rgb(" + r + "," + g + "," + b + ")";
}

function cursorObject(){
  fill(2,4,102);
  circle(mouseX, mouseY, 400);
}
