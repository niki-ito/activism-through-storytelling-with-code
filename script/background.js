
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
    for (let i=0; i<85; i++){
        let d = 300+(i*2);
        let alpha = 255-(i*3);
    
        p.fill(2,4,102,alpha);
        p.noStroke();
        p.circle(p.mouseX, p.mouseY, d);
      }
};

}

let myp5Background = new p5(sketch1); 
