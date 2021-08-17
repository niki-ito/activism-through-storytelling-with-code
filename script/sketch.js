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

//change color based on mouseX and mouseY position
function changeSpanColor(){
  let r = mouseX/2;
  let g = 200;
  let b = mouseY/2;
  spanColor = "rgb(" + r + "," + g + "," + b + ")";
}

//create a circle at the cursor location with blurred edges
function cursorObject(){
  
  for (let i=0; i<85; i++){
    let d = 300+(i*2);
    let alpha = 255-(i*3);

    fill(2,4,102,alpha);
    noStroke();
    circle(mouseX, mouseY, d);
  }

}
