let fft;
let myAudio1,myAudio2,myAudio3,myAudio4;
let img1 = [];
let img2 = [];
let img3 = [];
let img4 = [];

let elementsForSketchArray = [];
let display = 1;

function preload() {
  myAudio1 = loadSound("../assets/audio/visual-narrative/different.mp3");
  myAudio2 = loadSound("../assets/audio/visual-narrative/smells.mp3");
  myAudio3 = loadSound("../assets/audio/visual-narrative/confident.mp3");
  myAudio4 = loadSound("../assets/audio/visual-narrative/homesick.mp3");

  for (let i=1; i<5; i++) {
    img1.push(loadImage("../assets/images/visual-narrative/hatsue&niki/img1_"+i+".jpg"));
    img2.push(loadImage("../assets/images/visual-narrative/hatsue&niki/img2_"+i+".jpg"));
    img3.push(loadImage("../assets/images/visual-narrative/hatsue&niki/img3_"+i+".jpg"));
    img4.push(loadImage("../assets/images/visual-narrative/hatsue&niki/img4_"+i+".jpg"));
  }
}

function setup() {
  canvas = createCanvas(800, 800);
  canvas.style("width", "90%");
  canvas.style("height", "auto");
  canvas.style("margin", "0 auto");
  canvas.parent("canvas");
  
  subtitle = select("h2");
  subtitle.style("font-family","'Josefin Sans', sans-serif");
  subtitle.style("line-height","2.5rem");
  
  fft = new p5.FFT(0.9,64);
  
  //see button.js
  drawButtons();
  //see subtitles.js
  incertText();
  incertCue();

  createNewElementsForSketch();

  document.getElementById("clickable-1").addEventListener("click", showAndSwitchElementsForSketch1);
  document.getElementById("clickable-2").addEventListener("click", showAndSwitchElementsForSketch2);
  document.getElementById("clickable-3").addEventListener("click", showAndSwitchElementsForSketch3);
  document.getElementById("clickable-4").addEventListener("click", showAndSwitchElementsForSketch4);

  document.getElementById("button-exit").addEventListener("click",hideCanvas)
}

function showCanvas(){
  document.getElementById("defaultCanvas0").style.visibility="visible";
  document.getElementById("container").style.visibility="visible";
}

function hideCanvas() {
  pauseAnyAudio();
  document.getElementById("defaultCanvas0").style.visibility="hidden";
  document.getElementById("container").style.visibility="hidden"; 
}

function pauseAnyAudio() {
if (myAudio1.isPlaying()){
    myAudio1.pause();
    button.html("&#9654");
}   
if (myAudio2.isPlaying()){
  myAudio2.pause();
  button.html("&#9654");
} 
if (myAudio3.isPlaying()){
  myAudio3.pause();
  button.html("&#9654");
} 
if (myAudio4.isPlaying()){
  myAudio4.pause();
  button.html("&#9654");
}    
}

function showAndSwitchElementsForSketch1() {
  showCanvas();
  display = 1;
  elementsForSketchArray[0].controlButton1();
}

function showAndSwitchElementsForSketch2() {
  showCanvas();
  display = 2;
  elementsForSketchArray[1].controlButton2();
}

function showAndSwitchElementsForSketch3() {
  showCanvas();
  display = 3;
  elementsForSketchArray[2].controlButton3();
}

function showAndSwitchElementsForSketch4() {
  showCanvas();
  display = 4;
  elementsForSketchArray[3].controlButton4();
}

function createNewElementsForSketch() {
  let elementsForSketch1 = new ElementsForSketch(subtitleArray1,subtitleCueArray1);
  let elementsForSketch2 = new ElementsForSketch(subtitleArray2,subtitleCueArray2);
  let elementsForSketch3 = new ElementsForSketch(subtitleArray3,subtitleCueArray3);
  let elementsForSketch4 = new ElementsForSketch(subtitleArray4,subtitleCueArray4);
  elementsForSketchArray.push(elementsForSketch1,elementsForSketch2,elementsForSketch3,elementsForSketch4);
}

function draw() {
  background(255);

  displayImgTimerSubtitle();
  //audio visualizer
  let spectrum = fft.analyze();
  noStroke();

  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = map(spectrum[i], 0, 255, 0, height);
    fill(spectrum[i] * 1.5 + 50, 173, 159, 80);
    rect(x, 0, width / spectrum.length, height);
  }

}

function displayImgTimerSubtitle(){
  if (display === 1){
    incertInteractiveImages(img1);

    let counter = myAudio1.currentTime();
    let barWidth = width/myAudio1.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[0].timeSubtitles(myAudio1);

  } else if (display === 2){
    incertInteractiveImages(img2);

    let counter = myAudio2.currentTime();
    let barWidth = width/myAudio2.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[1].timeSubtitles(myAudio2);

  } else if (display === 3){
    incertInteractiveImages(img3);

    let counter = myAudio3.currentTime();
    let barWidth = width/myAudio3.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[2].timeSubtitles(myAudio3);

  } else if (display === 4){
    incertInteractiveImages(img4);

    let counter = myAudio4.currentTime();
    let barWidth = width/myAudio4.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[3].timeSubtitles(myAudio4);
  }
}

function incertInteractiveImages(imageNumber){
  let tint1,tint2,tint3,tint4;

  tint1 = map(mouseX+mouseY, 100, width, 255, 0);
  tint2 = map((mouseX)*-1+mouseY, width-100, 0, 255, 0);
  tint3 = map(mouseX+(mouseY)*-1, width-100, 0, 255, 0);
  tint4 = map(mouseY-(mouseX)*-1, width-100, 0, 255, 0);
  
  tint(255,tint4);
  image(imageNumber[3], 0, 0, width, height);
  
  tint(255, tint1);  
  image(imageNumber[0], 0, 0, width, height);
  
  tint(255, tint2);
  image(imageNumber[1], 0, 0, width, height);
  
  tint(255,tint3);
  image(imageNumber[2], 0, 0, width, height);
}

class ElementsForSketch {
  constructor(subtitleArrayFunction,subtitleCueArrayFunction) {
    this.subtitleArrayFunction = subtitleArrayFunction;
    this.subtitleCueArrayFunction = subtitleCueArrayFunction;
  }

  controlButton1() {
    button.mousePressed(this.togglePlaying1);
  }

  controlButton2() {
    button.mousePressed(this.togglePlaying2);
  }

  controlButton3() {
    button.mousePressed(this.togglePlaying3);
  }

  controlButton4() {
    button.mousePressed(this.togglePlaying4);
  }

  togglePlaying1(){
    if (!myAudio1.isPlaying()){
      myAudio1.play();
      button.html("&#10074&#10074");
    } else {
      myAudio1.pause();
      button.html("&#9654");
    }
  }

  togglePlaying2(){
    if (!myAudio2.isPlaying()){
      myAudio2.play();
      button.html("&#10074&#10074");
    } else {
      myAudio2.pause();
      button.html("&#9654");
    }
  }
  
  togglePlaying3(){
    if (!myAudio3.isPlaying()){
      myAudio3.play();
      button.html("&#10074&#10074");
    } else {
      myAudio3.pause();
      button.html("&#9654");
    }
  }

  togglePlaying4(){
    if (!myAudio4.isPlaying()){
      myAudio4.play();
      button.html("&#10074&#10074");
    } else {
      myAudio4.pause();
      button.html("&#9654");
    }
  }
 
  timeSubtitles(audioNumber) {
    for (let i = 0; i < this.subtitleArrayFunction.length; i ++){
      if (audioNumber.currentTime()>=this.subtitleCueArrayFunction[i]){
        index = i;
      } 
    }
    console.log(audioNumber.currentTime());
    this.showText();
  }

  showText() {
    subtitle.html(this.subtitleArrayFunction[index]);
  }

}