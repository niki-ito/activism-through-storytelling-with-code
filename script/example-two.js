//Press keys q, w, e, r, t, y to play audio and visuals. Press the keys again to stop. Each key can be played in layers or independantly in any order. 

let bubbles;
let piano;
let chime;
let river;
let kids;
let zoom;

let wave;
let trees;

let timePassed = 0;
let speed = 30;
let state = 0;

let chimeX = 20;
let degree = -3
let angle = 1 / 30;
let H = 0;
let colorChangeH = 5;

let transparancy = 0;

let green = 133;
let colorChangeGreen = 5;

let zoomScale = 10;
let scaleSpeed = 3;

let Q = document.getElementById('btn-q');
let W = document.getElementById('btn-w');
let E = document.getElementById('btn-e');
let R = document.getElementById('btn-r');
let T = document.getElementById('btn-t');
let Y = document.getElementById('btn-y');


function preload() {

  chime = loadSound('../assets/audio/example-two/chime.wav')
  bubbles = loadSound('../assets/audio/example-two/bubbles.wav')
  piano = loadSound('../assets/audio/example-two/ta taa ta ta ta taa.wav')
  river = loadSound('../assets/audio/example-two/river.wav')
  kids = loadSound('../assets/audio/example-two/kids.wav')
  zoom = loadSound('../assets/audio/example-two/zoom.wav')

  wave = loadImage('../assets/images/example-two/wave.png')
  trees = loadImage('../assets/images/example-two/trees.png')

}

function setup() {
  canvas = createCanvas(700, 700);
  canvas.style("width", "100%");
  canvas.style("height", "auto");
  canvas.parent("canvas");

  piano.playMode('restart');
  zoom.playMode('restart');
  imageMode(CENTER);
  noStroke();

}

function draw() {
  background(235, 242, 255);

  if (bubbles.isLooping()) {
    timePassed = timePassed + speed
    bubbleBackgroundLoop();
  }

  if (piano.isLooping()) {
    transparancy = transparancy + 5
    drawTrees();
  }

  if (river.isLooping()) {
    degree = degree + angle
    drawWave();
  }

  if (chime.isLooping()) {
    H = H + colorChangeH;
    chimeX = chimeX - 0.5
    drawChime();
  }

  if (zoom.isPlaying()) {
    fill(255);
    zoomScale = zoomScale + scaleSpeed
    circle(width / 2, height / 2, zoomScale)
  }

  if (kids.isLooping()) {
    green = green + colorChangeGreen
    drawKidsRect();
  }


}


function keyTyped() {

  if (key === 'q' && bubbles.isLooping() === false ) {
    bubbles.loop(0, 1, 0.04);
    Q.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (key === 'q' && bubbles.isLooping()) {
    bubbles.pause();
    Q.style.backgroundColor = "white";
  }

  if (key === 'w' && river.isLooping() === false) {
    river.loop(0, 1, 0.07);
    W.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (key === 'w' && river.isLooping()) {
    river.pause();
    W.style.backgroundColor = "white";
  }

  if (key === 'e' && chime.isLooping() === false) {
    chime.loop(0, 1, 0.05);
    E.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (key === 'e' && chime.isLooping()) {
    chime.pause();
    E.style.backgroundColor = "white";
  }

  if (key === 'r' && piano.isLooping() === false) {
    piano.loop(0, 1, 1);
    R.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (key === 'r' && piano.isLooping()) {
    piano.pause();
    transparancy = 0;
    R.style.backgroundColor = "white";
  }

  if (key === 't' && kids.isLooping() === false) {
    kids.loop(0, 1, 0.5);
    T.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (key === 't' && kids.isLooping()) {
    kids.pause();
    T.style.backgroundColor = "white";
  }

  if (key === 'y' && zoom.isPlaying() === false) {
    zoomScale = 0;
    zoom.play(0, 1, 0.8, 4);
    Y.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (key === 'y' && zoom.isPlaying()) {
    zoom.pause();
    zoomScale = 0;
    Y.style.backgroundColor = "white";
    
  } 

}

function mousePressed() {

  if (mouseInRect(126, 715, 35) && bubbles.isLooping() === false ) {
    bubbles.loop(0, 1, 0.04);
    Q.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (mouseInRect(126, 715, 35) && bubbles.isLooping()){
    bubbles.pause();
    Q.style.backgroundColor = "white";
  } 
    
    if (mouseInRect(175, 715, 35) && river.isLooping() === false) {
    river.loop(0, 1, 0.07);
    W.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (mouseInRect(175, 715, 35) && river.isLooping()){
    river.pause();
    W.style.backgroundColor = "white";
  }
    
    if (mouseInRect(224, 715, 35) && chime.isLooping() === false) {
    chime.loop(0, 1, 0.05);
    E.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (mouseInRect(224, 715, 35) && chime.isLooping()){
    chime.pause();
    E.style.backgroundColor = "white";    
  }
    
    if (mouseInRect(273, 715, 35) && piano.isLooping() === false) {
    piano.loop(0, 1, 1);
    R.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (mouseInRect(273, 715, 35) && piano.isLooping()){
    piano.pause();
    transparancy = 0;
    R.style.backgroundColor = "white";    
  }
    
    if (mouseInRect(322, 715, 35) && kids.isLooping() === false) {
    kids.loop(0, 1, 0.5);
    T.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (mouseInRect(322, 715, 35) && kids.isLooping()){
    kids.pause();
    T.style.backgroundColor = "white";    
  }
    
    if (mouseInRect(371, 715, 35) && zoom.isPlaying() === false) {
    zoomScale = 0;
    zoom.play(0, 1, 0.8, 4);
    Y.style.backgroundColor = "rgb(195, 190, 237)";
  } else if (mouseInRect(371, 715, 35) && zoom.isPlaying()){
    zoom.pause();
    zoomScale = 0;
    Y.style.backgroundColor = "white";    
  }
}

function mouseInRect(x, y, s) {
  if (mouseX > x && mouseX < x + s && mouseY > y && mouseY < y + s) {
    return true;
  } else {
    return false;
  }
}

function bubbleBackgroundLoop() {

  if (timePassed > 0 && timePassed <= 500) {
    drawRect(0, 80, 160, 240, 160, 80, 0);
    state = 1;
  } else if (timePassed > 500 && timePassed <= 1000) {
    drawRect(80, 160, 240, 160, 80, 0, 80);
    state = 2;
  } else if (timePassed > 1000 && timePassed <= 1500) {
    drawRect(160, 240, 160, 80, 0, 80, 160);
    state = 3;
  } else if (timePassed > 1500 && timePassed <= 2000) {
    drawRect(240, 160, 80, 0, 80, 160, 240);
    state = 4;
  } else if (timePassed > 2000 && timePassed <= 2500) {
    drawRect(160, 80, 0, 80, 160, 240, 160);
    state = 5;
  } else if (timePassed > 2500 && timePassed <= 3000) {
    drawRect(80, 0, 80, 160, 240, 160, 80);
    state = 6;

  } else if (timePassed > 3000) {
    timePassed = 0;
  }
}

function drawRect(opacity1, opacity2, opacity3, opacity4, opacity5, opacity6, opacity7) {
  noStroke();
  fill(255, 249, 235, opacity1);
  rect(0, 0, width, 100);
  fill(255, 249, 235, opacity2);
  rect(0, 100, width, 100);
  fill(255, 249, 235, opacity3);
  rect(0, 200, width, 100);
  fill(255, 249, 235, opacity4);
  rect(0, 300, width, 100);
  fill(255, 249, 235, opacity5);
  rect(0, 400, width, 100);
  fill(255, 249, 235, opacity6);
  rect(0, 500, width, 100);
  fill(255, 249, 235, opacity7);
  rect(0, 600, width, 100);

}

function drawChime() {

  sparkleChime(120, 100);
  sparkleChime(150, 300);
  sparkleChime(200, 130);
  sparkleChime(400, 50);
  sparkleChime(500, 500);
  sparkleChime(600, 400);
  sparkleChime(300, 250);
  sparkleChime(430, 160);
  sparkleChime(60, 500);


}

function sparkleChime(x, y) {

  if (chimeX < -20) {
    chimeX = 20;
  }

  if (H >= 350 || H <= 0) {
    colorChangeH = colorChangeH * -1
  }

  push();
  colorMode(HSB);
  fill(H, 10, 100)
  noStroke();
  quad(x - chimeX, y, x, y - chimeX, x + chimeX, y, x, y + chimeX);
  pop();
}

function drawWave() {
  push();

  if (degree >= 3 || degree <= -3) {
    angle = angle * -1
  }

  angleMode(DEGREES);
  translate(width / 2, height / 2);
  rotate(degree);
  scale(1.1);
  image(wave, 0, 0, width, height);
  pop();
}

function drawTrees() {
  push();
  tint(235, 242, 255, transparancy);
  image(trees, width / 2, height / 2, width, height);
  pop();
}

function drawKidsRect() {

  if (green >= 200 || green <= 133) {
    colorChangeGreen = colorChangeGreen * -1
  }
  push();
  fill(255, green, 133, 30);
  noStroke();
  rect(0, 0, width, height);
  pop();
}

