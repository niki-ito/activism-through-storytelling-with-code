let fft;
let myAudio1,myAudio2,myAudio3,myAudio4;
let img1,img2,img3,img4;
let elementsForSketchArray = [];
let display = 1;

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

  // for (let i=1; i<5; i++){
  //   document.getElementById("clickable-"+i).addEventListener("click", showAndSwitchElementsForSketch1);
  // }

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
  document.getElementById("defaultCanvas0").style.visibility="hidden";
  document.getElementById("container").style.visibility="hidden"; 
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
  // let elementsForSketch2 = new ElementsForSketch(img2,myAudio2,subtitleArray2,subtitleCueArray2);
  let elementsForSketch1 = new ElementsForSketch(subtitleArray1,subtitleCueArray1);
  let elementsForSketch2 = new ElementsForSketch(subtitleArray2,subtitleCueArray2);
  let elementsForSketch3 = new ElementsForSketch(subtitleArray3,subtitleCueArray3);
  let elementsForSketch4 = new ElementsForSketch(subtitleArray4,subtitleCueArray4);
  elementsForSketchArray.push(elementsForSketch1,elementsForSketch2,elementsForSketch3,elementsForSketch4);
}

function draw() {
  background(255);

  displayImgTimer();
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

// class ElementsForSketch {
//   constructor(img,audio,subtitleArrayFunction,subtitleCueArrayFunction) {
//     this.img = img;
//     this.audio = audio;
//     this.subtitleArrayFunction = subtitleArrayFunction;
//     this.subtitleCueArrayFunction = subtitleCueArrayFunction;
//   }

//   drawImage() {
//     image(this.img, 0, 0, width, height);
//   }

//   controlButton() {
//     button.mousePressed(this.togglePlaying());
//   }

//   togglePlaying(){
//     if (!this.audio.isPlaying()){
//       this.audio.play();
//       button.html("&#10074&#10074");
//     } else {
//       this.audio.pause();
//       button.html("&#9654");
//     }
//   }

//   timer() {
//     let counter = this.audio.currentTime();
//     let barWidth = width/this.audio.duration();
//     rect(0,height-20,barWidth*counter,20)
//   }

//   timeSubtitles() {
//     for (let i = 0; i < this.subtitleCueArrayFunction.length; i ++){
//       if (this.audio.currentTime()>=this.subtitleCueArrayFunction[i]){
//         index = i;
//       } 
//     }
//   }

//   showText() {
//     subtitle.html(this.subtitleArrayFunction[index]);
//   }
// }

function displayImgTimer(){
  if (display === 1){
    image(img1, 0, 0, 800, 800);

    let counter = myAudio1.currentTime();
    let barWidth = width/myAudio1.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[0].timeSubtitles(myAudio1);

  } else if (display === 2){
    image(img2, 0, 0, 800, 800);

    let counter = myAudio2.currentTime();
    let barWidth = width/myAudio2.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[1].timeSubtitles(myAudio2);

  } else if (display === 3){
    image(img3, 0, 0, 800, 800);

    let counter = myAudio3.currentTime();
    let barWidth = width/myAudio3.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[2].timeSubtitles(myAudio3);

  } else if (display === 4){
    image(img4, 0, 0, 800, 800);

    let counter = myAudio4.currentTime();
    let barWidth = width/myAudio4.duration();
    rect(0,height-20,barWidth*counter,20);

    elementsForSketchArray[3].timeSubtitles(myAudio4);
  }
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

  // timeSubtitles() {
  //   for (let i = 0; i < this.subtitleArrayFunction; i ++){
  //     if (myAudio1.currentTime()>=this.subtitleCueArrayFunction[i]){
  //       index = i;
  //     } 
  //   }
  //   this.showText();
  // }
 
  timeSubtitles(audioNumber) {
    for (let i = 0; i < this.subtitleArrayFunction.length; i ++){
      if (audioNumber.currentTime()>=this.subtitleCueArrayFunction[i]){
        index = i;
      } 
    }
    this.showText();
  }

  showText() {
    subtitle.html(this.subtitleArrayFunction[index]);
  }

}