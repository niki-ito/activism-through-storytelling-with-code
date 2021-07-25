let fft;
let myAudio1,myAudio2,myAudio3,myAudio4;
let img1,img2,img3,img4;
let elementsForSketch2;

function preload() {
  myAudio1 = loadSound("../assets/audio/visual-narrative/different.mp3");
  myAudio2 = loadSound("../assets/audio/visual-narrative/smells.mp3");
  myAudio3 = loadSound("../assets/audio/visual-narrative/confident.mp3");
  myAudio4 = loadSound("../assets/audio/visual-narrative/homesick.mp3");
  img1 = loadImage("../assets/images/visual-narrative/hatsue&niki/hatsue-13.jpg");
  img2 = loadImage("../assets/images/visual-narrative/hatsue&niki/hatsue-10.jpg");
  img3 = loadImage("../assets/images/visual-narrative/hatsue&niki/detail-3.jpg");
  img4 = loadImage("../assets/images/visual-narrative/hatsue&niki/hatsue-5.jpg");
}

function setup() {
  canvas = createCanvas(800, 800);
  canvas.style("width", "90%");
  canvas.style("height", "auto");
  canvas.style("margin", "0 auto");
  canvas.parent("canvas");
  
  subtitle = select("h2");
  
  fft = new p5.FFT(0.9,64);
  
  //see button.js
  drawButtons();
  //see subtitles.js
  incertText();
  incertCue();

  for (let i=1; i<5; i++){
    document.getElementById("clickable-"+i).addEventListener("click", showCanvas);
  }
  document.getElementById("button-exit").addEventListener("click",hideCanvas)
}

function showCanvas(){
  document.getElementById("defaultCanvas0").style.visibility="visible";
  document.getElementById("container").style.visibility="visible";
}

function hideCanvas() {
  document.getElementById("defaultCanvas0").style.visibility="hidden";
  document.getElementById("container").style.visibility="hidden"; 
}

function createNewElementsForSketch() {
  let elementsForSketch2 = new ElementsForSketch(img2,myAudio2,subtitleArray2,subtitleCueArray2);
}

function draw() {
  background(255);

  createNewElementsForSketch();
  elementsForSketch2.drawImage();

  //audio visualizer
  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(spectrum[i] * 1.5 + 50, 173, 159, 80);
    rect(x, 0, width / spectrum.length, height);
  }
  
  elementsForSketch2.timer();
  elementsForSketch2.timeSubtitles();
  elementsForSketch2.showText();

  elementsForSketch2.controlButton();
}

// function timer() {
//   let counter = myAudio2.currentTime();
//   let barWidth = width/myAudio2.duration();
//   // console.log(myAudio.currentTime())
//   rect(0,height-20,barWidth*counter,20)
//   console.log(myAudio2.currentTime())
// }

class ElementsForSketch {
  constructor(img,audio,subtitleArrayFunction,subtitleCueArrayFunction) {
    this.img = img;
    this.audio = audio;
    this.subtitleArrayFunction = subtitleArrayFunction;
    this.subtitleCueArrayFunction = subtitleCueArrayFunction;
  }

  drawImage() {
    image(this.img, 0, 0, width, height);
  }

  controlButton() {
    button.mousePressed(this.togglePlaying());
  }

  togglePlaying(){
    if (!this.audio.isPlaying()){
      this.audio.play();
      button.html("&#10074&#10074");
    } else {
      this.audio.pause();
      button.html("&#9654");
    }
  }

  timer() {
    let counter = this.audio.currentTime();
    let barWidth = width/this.audio.duration();
    rect(0,height-20,barWidth*counter,20)
  }

  timeSubtitles() {
    for (let i = 0; i < this.subtitleCueArrayFunction.length; i ++){
      if (this.audio.currentTime()>=this.subtitleCueArrayFunction[i]){
        index = i;
      } 
    }
  }

  showText() {
    subtitle.html(this.subtitleArrayFunction[index]);
  }
}
