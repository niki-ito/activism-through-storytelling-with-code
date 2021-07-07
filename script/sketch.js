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
  span = select("span");

  noCursor();
}

function draw() {
  background(255, 255, 245);
  changeSpanColor();
  span.style("color", spanColor)
  drawCursor();
}

function drawCursor(){
  fill(233, 255, 168);
  noStroke();
  ellipse(mouseX, mouseY, 20,20);
}

function changeSpanColor(){
  let r = mouseX/5;
  let g = 100;
  let b = mouseY/3;
  spanColor = "rgb(" + r + "," + g + "," + b + ")";
}