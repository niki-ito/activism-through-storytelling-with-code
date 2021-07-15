let myAudio, fft;
let img;

function preload() {
  myAudio = loadSound("../assets/audio/visual-narrative/smells.mp3");
  img = loadImage("../assets/images/visual-narrative/placeholder/placeholder_3.png");
}

function setup() {
  createCanvas(800, 800);
  fft = new p5.FFT(0.9, 64);
  myAudio.setVolume(1);
  
  button = createButton("play");
  button.mousePressed(togglePlaying);
  document.getElementById("clickable-1").addEventListener("click", showCanvas);
}

function showCanvas(){
    document.getElementById("defaultCanvas0").style.visibility="visible";
    console.log("clicked")
}

function draw() {
  background(255);

  timer();

  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(spectrum[i] * 1.5 + 50, 173, 159, 80);
    // rect(x,height-h, width/spectrum.length-2, h);

    rect(x, 0, width / spectrum.length, height);
  }

  blend(img, 0, 0, width, height, 0, 0, width, height, MULTIPLY);
}

function togglePlaying(){
  if (!myAudio.isPlaying()){
    myAudio.play();
    button.html("pause");
  } else {
    myAudio.pause();
    button.html("play");
  }
  
}

function timer() {
  let counter;
  let barWidth = width/myAudio.duration();
  
  counter = myAudio.currentTime();
  
  
  rect(0,height-20,width/myAudio.duration()*counter,20)
}
