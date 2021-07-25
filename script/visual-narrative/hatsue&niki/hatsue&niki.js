let myAudio, fft;
let img;

function preload() {
  myAudio = loadSound("../assets/audio/visual-narrative/smells.mp3");
  img = loadImage("../assets/images/visual-narrative/hatsue&niki/hatsue-10.jpg");
}

function setup() {
  canvas = createCanvas(800, 800);
  canvas.style("width", "90%");
  canvas.style("height", "auto");
  canvas.style("margin", "0 auto");
  canvas.parent("canvas");
  
  subtitle = select("h2");
  
  fft = new p5.FFT(0.9,64);
  myAudio.setVolume(1);
  
  //see button.js
  drawButtons();
  //see subtitles.js
  incertText();
  incertCue();

  for (let i=1; i<5; i++){
    document.getElementById("clickable-"+i).addEventListener("click", showCanvas);
  }

}

function showCanvas(){
  document.getElementById("defaultCanvas0").style.visibility="visible";
  console.log("clicked");
}

function draw() {
  background(255);

  image(img, 0, 0, width, height);

  //audio visualizer
  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(spectrum[i] * 1.5 + 50, 173, 159, 80);
    rect(x, 0, width / spectrum.length, height);
  }
  
  timer();
  timeSubtitles();
  showText();
}

function timer() {
  let counter = myAudio.currentTime();
  let barWidth = width/myAudio.duration();
  // console.log(myAudio.currentTime())
  rect(0,height-20,barWidth*counter,20)
}
