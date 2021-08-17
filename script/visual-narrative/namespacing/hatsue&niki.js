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

const sketch2 = function(p){
  p.fft;
  p.myAudio1,p.myAudio2,p.myAudio3,p.myAudio4;
  p.img1 = [];
  p.img2 = [];
  p.img3 = [];
  p.img4 = [];
  
  p.elementsForSketchArray = [];
  p.display = 1;

p.preload = () => {
  p.myAudio1 = p.loadSound("../assets/audio/visual-narrative/different.mp3");
  p.myAudio2 = p.loadSound("../assets/audio/visual-narrative/smells.mp3");
  p.myAudio3 = p.loadSound("../assets/audio/visual-narrative/confident.mp3");
  p.myAudio4 = p.loadSound("../assets/audio/visual-narrative/homesick.mp3");

  for (let i=1; i<5; i++) {
    p.img1.push(p.loadImage("../assets/images/visual-narrative/hatsue&niki/img1_"+i+".jpg"));
    p.img2.push(p.loadImage("../assets/images/visual-narrative/hatsue&niki/img2_"+i+".jpg"));
    p.img3.push(p.loadImage("../assets/images/visual-narrative/hatsue&niki/img3_"+i+".jpg"));
    p.img4.push(p.loadImage("../assets/images/visual-narrative/hatsue&niki/img4_"+i+".jpg"));
  }
}

p.setup = () => {
  p.canvas = p.createCanvas(800, 800);
  p.canvas.style("width", "90%");
  p.canvas.style("height", "auto");
  p.canvas.style("margin", "0 auto");
  p.canvas.parent("canvas");
  
//   p.subtitle = p.select("h2");
//   p.subtitle.p.style("font-family","'Josefin Sans', sans-serif");
//   p.subtitle.p.style("line-height","2.5rem");

//   p.fft = new p.p5.FFT(0.9,64);

//   //see button.js
  p.drawButtons();
//   //see subtitles.js
//   p.incertText();
//   p.incertCue();

//   p.createNewElementsForSketch();

  document.getElementById("clickable-1").addEventListener("click", p.showAndSwitchElementsForSketch1);
//   p.document.getElementById("clickable-2").addEventListener("click", p.showAndSwitchElementsForSketch2);
//   p.document.getElementById("clickable-3").addEventListener("click", p.showAndSwitchElementsForSketch3);
//   p.document.getElementById("clickable-4").addEventListener("click", p.showAndSwitchElementsForSketch4);

  document.getElementById("button-exit").addEventListener("click", p.hideCanvas);
};

p.drawButtons = () => {
  //create and style the play button
  p.button = p.createButton("&#9654");
  p.button.position(345,665);
  p.button.style("background-color:white");
  p.button.style("color: peachpuff");
  p.button.style("border: 0px");
  p.button.style("font-size:1.4rem");
  p.button.parent("button");
  // p.button.mousePressed(p.togglePlaying2);
  
  //create and style the exit button
  p.buttonX = p.createButton("&#10006");
  p.buttonX.position(665,5);
  p.buttonX.style("background-color:white");
  p.buttonX.style("color: peachpuff");
  p.buttonX.style("border: 0px");
  p.buttonX.style("font-size:1.4rem");
  p.buttonX.parent("button-exit");   
};

p.showCanvas = () => {
  document.getElementById("defaultCanvas0").style.visibility="visible";
  document.getElementById("container").style.visibility="visible";
}

p.hideCanvas = () => {
  // p.pauseAnyAudio();
  document.getElementById("defaultCanvas0").style.visibility="hidden";
  document.getElementById("container").style.visibility="hidden"; 
}

// p.pauseAnyAudio = () => {
// if (p.myAudio1.isPlaying()){
//   p.myAudio1.pause();
//   p.button.html("&#9654");
// }   
// if (p.myAudio2.isPlaying()){
//   p.myAudio2.pause();
//   p.button.html("&#9654");
// } 
// if (p.myAudio3.isPlaying()){
//   p.myAudio3.pause();
//   p.button.html("&#9654");
// } 
// if (p.myAudio4.isPlaying()){
//   p.myAudio4.pause();
//   p.button.html("&#9654");
// }   
// }

p.showAndSwitchElementsForSketch1 = () => {
  p.showCanvas();
  p.display = 1;
//   p.elementsForSketchArray[0].controlButton1(); 
}

// p.showAndSwitchElementsForSketch2 = () => {
//   p.showCanvas();
//   p.display = 2;
//   p.elementsForSketchArray[1].controlButton2(); 
// }

// p.showAndSwitchElementsForSketch3 = () => {
//   p.showCanvas();
//   p.display = 3;
//   p.elementsForSketchArray[2].controlButton3(); 
// }

// p.showAndSwitchElementsForSketch4 = () => {
//   p.showCanvas();
//   p.display = 4;
//   p.elementsForSketchArray[3].controlButton4(); 
// }

// p.createNewElementsForSketch = () => {
//   p.elementsForSketch1 = new p.ElementsForSketch(p.subtitleArray1,p.subtitleCueArray1);
//   p.elementsForSketch2 = new p.ElementsForSketch(p.subtitleArray2,p.subtitleCueArray2);
//   p.elementsForSketch3 = new p.ElementsForSketch(p.subtitleArray3,p.subtitleCueArray3);
//   p.elementsForSketch4 = new p.ElementsForSketch(p.subtitleArray4,p.subtitleCueArray4);
//   p.elementsForSketchArray.push(p.elementsForSketch1,p.elementsForSketch2,p.elementsForSketch3,p.elementsForSketch4);
// }

p.draw = () => {
  p.background(255);

//   p.displayImgTimerSubtitle();
//   //audio visualizer
//   p.spectrum = p.fft.p.analyze();
//   p.noStroke();

//   for (let i = 0; i < p.spectrum.p.length; i++) {
//     p.x = p.map(i, 0, p.spectrum.p.length, 0, p.width);
//     p.h = p.map(p.spectrum[i], 0, 255, 0, p.height);
//     p.fill(p.spectrum[i] * 1.5 + 50, 173, 159, 80);
//     p.rect(p.x, 0, p.width / p.spectrum.p.length, p.height);
//   }
}

// p.displayImgTimerSubtitle = () =>{
//   if (p.display === 1){
//     p.incertInteractiveImages(p.img1);

//     p.counter = p.myAudio1.p.currentTime();
//     p.barWidth = p.width/p.myAudio1.p.duration();
//     p.rect(0,p.height-20,p.barWidth*p.counter,20);

//     p.elementsForSketchArray[0].p.timeSubtitles(p.myAudio1);

//   } else if (p.display === 2){
//     p.incertInteractiveImages(p.img2);

//     p.counter = p.myAudio2.p.currentTime();
//     p.barWidth = p.width/p.myAudio2.p.duration();
//     p.rect(0,p.height-20,p.barWidth*p.counter,20);

//     p.elementsForSketchArray[1].p.timeSubtitles(p.myAudio2);

//   } else if (p.display === 3){
//     p.incertInteractiveImages(p.img3);

//     p.counter = p.myAudio3.p.currentTime();
//     p.barWidth = p.width/p.myAudio3.p.duration();
//     p.rect(0,p.height-20,p.barWidth*p.counter,20);

//     p.elementsForSketchArray[2].p.timeSubtitles(p.myAudio3);

//   } else if (p.display === 4){
//     p.incertInteractiveImages(p.img4);

//     p.counter = p.myAudio4.p.currentTime();
//     p.barWidth = p.width/p.myAudio4.p.duration();
//     p.rect(0,p.height-20,p.barWidth*p.counter,20);

//     p.elementsForSketchArray[3].p.timeSubtitles(p.myAudio4);
//   }  
// }

// p.incertInteractiveImages = (_imageNumber) => {
//   p.tint1,p.tint2,p.tint3,p.tint4;

//   p.tint1 = p.map(p.mouseX+p.mouseY, 100, p.width, 255, 0);
//   p.tint2 = p.map((p.mouseX)*-1+p.mouseY, p.width-100, 0, 255, 0);
//   p.tint3 = p.map(p.mouseX+(p.mouseY)*-1, p.width-100, 0, 255, 0);
//   p.tint4 = p.map(p.mouseY-(p.mouseX)*-1, p.width-100, 0, 255, 0);
  
//   p.tint(255,p.tint4);
//   p.image(p.imageNumber[3], 0, 0, p.width, p.height);
  
//   p.tint(255, p.tint1);  
//   p.image(p.imageNumber[0], 0, 0, p.width, p.height);
  
//   p.tint(255, p.tint2);
//   p.image(p.imageNumber[1], 0, 0, p.width, p.height);
  
//   p.tint(255,p.tint3);
//   p.image(p.imageNumber[2], 0, 0, p.width, p.height);  
// }

// p.ElementsForSketch = () => {
//   p.constructor(p.subtitleArrayFunction,p.subtitleCueArrayFunction); {
//     p.this.subtitleArrayFunction = p.subtitleArrayFunction;
//     p.this.subtitleCueArrayFunction = p.subtitleCueArrayFunction;
//   }

//   p.controlButton1(); {
//     p.button.p.mousePressed(p.this.togglePlaying1);
//   }

//   p.controlButton2(); {
//     p.button.p.mousePressed(p.this.togglePlaying2);
//   }

//   p.controlButton3(); {
//     p.button.p.mousePressed(p.this.togglePlaying3);
//   }

//   p.controlButton4(); {
//     p.button.p.mousePressed(p.this.togglePlaying4);
//   }

//   p.togglePlaying1();{
//     if (!p.myAudio1.p.isPlaying()){
//       p.myAudio1.p.play();
//       p.button.p.html("&#10074&#10074");
//     } else {
//       p.myAudio1.p.pause();
//       p.button.p.html("&#9654");
//     }
//   }

//   p.togglePlaying2();{
//     if (!p.myAudio2.p.isPlaying()){
//       p.myAudio2.p.play();
//       p.button.p.html("&#10074&#10074");
//     } else {
//       p.myAudio2.p.pause();
//       p.button.p.html("&#9654");
//     }
//   }
  
//   p.togglePlaying3();{
//     if (!p.myAudio3.p.isPlaying()){
//       p.myAudio3.p.play();
//       p.button.p.html("&#10074&#10074");
//     } else {
//       p.myAudio3.p.pause();
//       p.button.p.html("&#9654");
//     }
//   }

//   p.togglePlaying4();{
//     if (!p.myAudio4.p.isPlaying()){
//       p.myAudio4.p.play();
//       p.button.p.html("&#10074&#10074");
//     } else {
//       p.myAudio4.p.pause();
//       p.button.p.html("&#9654");
//     }
//   }
 
//   p.timeSubtitles(p.audioNumber); {
//     for (let i = 0; i < p.this.subtitleArrayFunction.p.length; i ++){
//       if (p.audioNumber.p.currentTime()>=p.this.subtitleCueArrayFunction[i]){
//         p.index = i;
//       } 
//     }
//     p.console.p.log(p.audioNumber.p.currentTime());
//     p.this.showText();
//   }

//   p.showText(); {
//     p.subtitle.p.html(p.this.subtitleArrayFunction[p.index]);
//   }  
// }

}


let myp5canvas = new p5(sketch2); 
