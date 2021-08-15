
const sketch1 = function(p){
  p.canvas;

p.windowResized = () => {
  p.resizeCanvas(p.windowWidth, p.windowHeight);
}
  
p.setup = () => {
  p.canvas = p.createCanvas(p.windowWidth, p.windowHeight);
  p.canvas.position(0,0);
  p.canvas.style('z-index', '-1');
  p.canvas.style('position', 'fixed');
};

p.draw = () => {
  p.background(245,251,243);
  p.cursorObject();
};

p.cursorObject = () => {
  p.fill(2,4,102);
  p.circle(p.mouseX, p.mouseY, 400); 
};

}

let myp5Background = new p5(sketch1); 
