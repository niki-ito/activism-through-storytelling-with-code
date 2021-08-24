//background p5 canvas

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
      p.d = 300+(i*2);
      p.alpha = 255-(i*3);
  
      p.fill(2,4,102,p.alpha);
      p.noStroke();
      p.circle(p.mouseX, p.mouseY, p.d);
    }
};

}


// audio visualization p5 canvas

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

 for (let i=1; i<4; i++) {
    p.img1.push(p.loadImage("../assets/images/visual-narrative/joe&hatsue/img1_"+i+".jpg"));
    p.img2.push(p.loadImage("../assets/images/visual-narrative/joe&hatsue/img2_"+i+".jpg"));
    p.img3.push(p.loadImage("../assets/images/visual-narrative/joe&hatsue/img3_"+i+".jpg"));
    p.img4.push(p.loadImage("../assets/images/visual-narrative/joe&hatsue/img4_"+i+".jpg"));
  }
  p.myAudio1 = p.loadSound("../assets/audio/visual-narrative/names.mp3");
  p.myAudio2 = p.loadSound("../assets/audio/visual-narrative/born.mp3");
  p.myAudio3 = p.loadSound("../assets/audio/visual-narrative/agency.mp3");
  p.myAudio4 = p.loadSound("../assets/audio/visual-narrative/male.mp3");
}

p.setup = () => {
  p.canvas = p.createCanvas(800, 800);
  p.canvas.style("width", "90%");
  p.canvas.style("height", "auto");
  p.canvas.style("margin", "0 auto");
  p.canvas.parent("canvas");
  
  p.subtitle = p.select("h2");
  p.subtitle.style("font-family","'Josefin Sans', sans-serif");
  p.subtitle.style("line-height","2.5rem");

  p.fft = new p5.FFT(0.9,64);

  p.drawButtons();
  p.incertText();
  p.incertCue();

  p.createNewElementsForSketch();

  document.getElementById("clickable-1").addEventListener("click", p.showAndSwitchElementsForSketch1);
  document.getElementById("clickable-2").addEventListener("click", p.showAndSwitchElementsForSketch2);
  document.getElementById("clickable-3").addEventListener("click", p.showAndSwitchElementsForSketch3);
  document.getElementById("clickable-4").addEventListener("click", p.showAndSwitchElementsForSketch4);

  document.getElementById("button-exit").addEventListener("click", p.hideCanvas);
};

p.showCanvas = () => {
  document.getElementById("defaultCanvas1").style.visibility="visible";
  document.getElementById("container").style.visibility="visible";
}

p.hideCanvas = () => {
  p.pauseAnyAudio();
  document.getElementById("defaultCanvas1").style.visibility="hidden";
  document.getElementById("container").style.visibility="hidden"; 
}

p.pauseAnyAudio = () => {
if (p.myAudio1.isPlaying()){
  p.myAudio1.pause();
  p.button.html("&#9654");
}   
if (p.myAudio2.isPlaying()){
  p.myAudio2.pause();
  p.button.html("&#9654");
} 
if (p.myAudio3.isPlaying()){
  p.myAudio3.pause();
  p.button.html("&#9654");
} 
if (p.myAudio4.isPlaying()){
  p.myAudio4.pause();
  p.button.html("&#9654");
}   
}

p.showAndSwitchElementsForSketch1 = () => {
  p.showCanvas();
  p.display = 1;
  p.elementsForSketchArray[0].controlButton1(); 
}

p.showAndSwitchElementsForSketch2 = () => {
  p.showCanvas();
  p.display = 2;
  p.elementsForSketchArray[1].controlButton2(); 
}

p.showAndSwitchElementsForSketch3 = () => {
  p.showCanvas();
  p.display = 3;
  p.elementsForSketchArray[2].controlButton3(); 
}

p.showAndSwitchElementsForSketch4 = () => {
  p.showCanvas();
  p.display = 4;
  p.elementsForSketchArray[3].controlButton4(); 
}

p.createNewElementsForSketch = () => {
  p.elementsForSketch1 = new ElementsForSketch(p.subtitleArray1,p.subtitleCueArray1);
  p.elementsForSketch2 = new ElementsForSketch(p.subtitleArray2,p.subtitleCueArray2);
  p.elementsForSketch3 = new ElementsForSketch(p.subtitleArray3,p.subtitleCueArray3);
  p.elementsForSketch4 = new ElementsForSketch(p.subtitleArray4,p.subtitleCueArray4);
  p.elementsForSketchArray.push(p.elementsForSketch1,p.elementsForSketch2,p.elementsForSketch3,p.elementsForSketch4);
}

p.draw = () => {
  p.background(255);

//logic to fix preload error
if(p.img1[0] != null ){
  p.displayImgTimerSubtitle();
}
  //audio visualizer
  p.spectrum = p.fft.analyze();
  p.noStroke();

  for (let i = 0; i < p.spectrum.length; i++) {
    p.x = p.map(i, 0, p.spectrum.length, 0, p.width);
    p.fill(p.spectrum[i] * 1.5 + 50, 173, 159, 80);
    p.rect(p.x, 0, p.width / p.spectrum.length, p.height);
  }
}

p.displayImgTimerSubtitle = () =>{
  if (p.display === 1){
    p.incertInteractiveImages(p.img1);

    p.counter = p.myAudio1.currentTime();
    p.barWidth = p.width/p.myAudio1.duration();
    p.rect(0,p.height-20,p.barWidth*p.counter,20);

    p.elementsForSketchArray[0].timeSubtitles(p.myAudio1);

  } else if (p.display === 2){
    p.incertInteractiveImages(p.img2);

    p.counter = p.myAudio2.currentTime();
    p.barWidth = p.width/p.myAudio2.duration();
    p.rect(0,p.height-20,p.barWidth*p.counter,20);

    p.elementsForSketchArray[1].timeSubtitles(p.myAudio2);

  } else if (p.display === 3){
    p.incertInteractiveImages(p.img3);

    p.counter = p.myAudio3.currentTime();
    p.barWidth = p.width/p.myAudio3.duration();
    p.rect(0,p.height-20,p.barWidth*p.counter,20);

    p.elementsForSketchArray[2].timeSubtitles(p.myAudio3);

  } else if (p.display === 4){
    p.incertInteractiveImages(p.img4);

    p.counter = p.myAudio4.currentTime();
    p.barWidth = p.width/p.myAudio4.duration();
    p.rect(0,p.height-20,p.barWidth*p.counter,20);

    p.elementsForSketchArray[3].timeSubtitles(p.myAudio4);
  }  
}

p.incertInteractiveImages = (imageNumber) => {
  p.tint1,p.tint2,p.tint3;

  p.tint1 = p.map(p.mouseY, 100, p.width, 255, 0);
  p.tint2 = p.map((p.mouseX)*-1+p.mouseY, p.width-100, 0, 255, 0);
  p.tint3 = p.map(p.mouseY, p.width, 0, 255, 0);
  
  p.tint(255, p.tint1);  
  p.image(imageNumber[0], 0, 0, p.width, p.height);
  
  p.tint(255,p.tint3);
  p.image(imageNumber[2], 0, 0, p.width, p.height);
  
  p.tint(255, p.tint2);
  p.image(imageNumber[1], 0, 0, p.width, p.height); 
}

class ElementsForSketch {
  constructor(subtitleArrayFunction,subtitleCueArrayFunction) {
    this.subtitleArrayFunction = subtitleArrayFunction;
    this.subtitleCueArrayFunction = subtitleCueArrayFunction;
  }

  controlButton1() {
    p.button.mousePressed(this.togglePlaying1);
  }

  controlButton2() {
    p.button.mousePressed(this.togglePlaying2);
  }

  controlButton3() {
    p.button.mousePressed(this.togglePlaying3);
  }

  controlButton4() {
    p.button.mousePressed(this.togglePlaying4);
  }

  togglePlaying1(){
    if (!p.myAudio1.isPlaying()){
      p.myAudio1.play();
      p.button.html("&#10074&#10074");
    } else {
      p.myAudio1.pause();
      p.button.html("&#9654");
    }
  }

  togglePlaying2(){
    if (!p.myAudio2.isPlaying()){
      p.myAudio2.play();
      p.button.html("&#10074&#10074");
    } else {
      p.myAudio2.pause();
      p.button.html("&#9654");
    }
  }
  
  togglePlaying3(){
    if (!p.myAudio3.isPlaying()){
      p.myAudio3.play();
      p.button.html("&#10074&#10074");
    } else {
      p.myAudio3.pause();
      p.button.html("&#9654");
    }
  }

  togglePlaying4(){
    if (!p.myAudio4.isPlaying()){
      p.myAudio4.play();
      p.button.html("&#10074&#10074");
    } else {
      p.myAudio4.pause();
      p.button.html("&#9654");
    }
  }
 
  timeSubtitles(audioNumber) {
    for (let i = 0; i < this.subtitleArrayFunction.length; i ++){
      if (audioNumber.currentTime()>=this.subtitleCueArrayFunction[i]){
        p.index = i;
      } 
    }
    this.showText();
  }

  showText() {
    p.subtitle.html(this.subtitleArrayFunction[p.index]);
  }

}

p.drawButtons = () => {
  //create and style the play button
  p.button = p.createButton("&#9654");
  p.button.position(345,665);
  p.button.style("background-color:white");
  p.button.style("color: peachpuff");
  p.button.style("border: 0px");
  p.button.style("font-size:1.4rem");
  p.button.parent("button");
  
  //create and style the exit button
  p.buttonX = p.createButton("&#10006");
  p.buttonX.position(665,5);
  p.buttonX.style("background-color:white");
  p.buttonX.style("color: peachpuff");
  p.buttonX.style("border: 0px");
  p.buttonX.style("font-size:1.4rem");
  p.buttonX.parent("button-exit");   
};

p.subtitleArray1 = [];
p.subtitleCueArray1 = [];

p.subtitleArray2 = [];
p.subtitleCueArray2 = [];

p.subtitleArray3 = [];
p.subtitleCueArray3 = [];

p.subtitleArray4 = [];
p.subtitleCueArray4 = [];

p.index = 0;

p.incertText = () => {
  p.subtitleArray1.push("So I’m working on taking<br> my mother’s maiden name","as part of my last name"," so it would be Tokumasu Field."," Just so that in any moment,"," people would know that"," I have not just American heritage ","just to speak more to myself ","and my mom is still alive so ","it’s not something that I’m doing"," after she passes away.","It’s something that<br> she always kind of wanted."," Apparently it’s not such a<br> common name in Japan, Tokumasu."," So she was interested in having a legacy."," I respect that because<br> I also changed my first name."," So Hatsue is not my legal first name."," It’s my middle name really."," So Hatsue comes from<br> my grandmother’s name"," and It’s kind of enlightening ","seeing other people doing that."," I saw a lot of people embrace it"," and immediately change<br> what they’re calling me ","and so that made me feel <br>really good about it."," But my white side of the family ","still refuses to call me Hatsue."," So have you experienced any ","negativity in terms of that ","from the other side of your family?"," I haven’t experienced that<br> from my side of the family. ","I have to be honest with you<br> all and myself that ","part of it is that my father is deceased"," and passed away few years ago"," and I think that that also is a part of"," coming into more of your own as a person"," or things that were set in place"," that you felt like <br>you didn’t have control over"," are suddenly then you have control"," or you could think about it. ","Because I don’t know if my father"," what he would say about it","good or bad but"," it’s something that <br>I don’t necessarily have to consider. ","So I don’t have that same kind of"," push back from my family."," I’m surprised that you said that"," there’s parts that refuse because ","refusal is a very strong word."," This is not the first experience of"," the white side of my family"," treating my mother and I<br> specifically differently."," So it wasn’t all that shocking,"," hearing them say ","“You know we’re not going to call you that.”"," My grandmother, especially."," And then my dad calls me a nickname"," that he’s been calling me ","since I was a child but it felt like ","every since I changed my name,"," he uses that as a way to"," avoid calling me Hatsue."," Just because he’s the one that ","picked out my real name"," and I can understand ","how hard it is for your child that"," you picked this name out<br> specifically because"," it’s kind of an owe to <br>his heritage a little bit but"," recently he’s been calling me Hatsue ","and so that’s very nice."," That is very nice.")
  p.subtitleArray2.push("All my life I’ve craved to ","have been born in Japan,"," to grow up in Japan,"," to be more fluent in Japanese, ","to go to school in Japan. ","I just have this longing to ","always be in Japan just because"," I’ve spent all my summers there ","and I’m very nostalgic of"," the smells of my grandmother’s apartment ","and just the feeling of ","closing your eyes and riding the subway"," and the specific intercom guy ","telling me the next stop."," And so that nostalgia really drives me ","to want to feel more Japanese. ","And so that I guess was my catalyst"," for changing my name ","and trying to connect <br>more with my identity."," Um, that’s really interesting"," and kind of a powerful idea."," I just think that as an adult though,"," what do you think about"," growing up in Japan,"," how their society is with women"," and you’re an artist"," and all the challenges that you would face ","that you didn’t face in the Unites States."," I totally agree with you ","but at the same time ","there’s pluses and minuses to ","growing up in a <br>society environment like that"," but you also would not be <br>the person you are today ","and I would be totally different<br> if i’d grown up in a different way so…"," That’s true."," I wouldn’t be the same person ","that I am today but,"," I feel like I don’t care sometimes. ","Like it would be worth it?"," It would be worth it."," Just having those kinds of ","different experiences in Japan are"," kind of a priority for me.");
  p.subtitleArray3.push("I’m definitely like,"," not anti-America but"," America’s definitely not the best country"," and Japan is also not the best country."," But for me, <br>there’s so many more things in Japan"," that I’m comfortable with."," Especially right now with ","the Asian American hate,"," I don’t feel safe as an Asian, <br>small female individual."," And I know there are crimes in Japan"," and I know there’s kidnappings"," but I never feel always on edge,"," like I’m always on edge here."," No, I totally agree with you ","and I feel the same way"," but because I’ve been thinking about it ","in relation to different situations,"," there’s a reason for that."," It’s a homogenous society."," You’re comfortable, ","but maybe somebody else <br>is not comfortable"," walking around Japan."," Maybe they don’t have the same"," sense of security or safety."," I mean, I definitely <br>feel the same kind of feeling ","in Japan where, <br>I’m a hyper protective person ","so when I feel like"," “Oh my friends are <br>coming home from the train station,”"," in Japan,<br> it’s never a thought of,"," they may or may not make it."," So that’s a huge relief."," And also when<br> you’re walking around there ","it gives you a sense of adventure."," There’s nowhere or really <br>there’s almost nothing I can do ","where I’m going to be endangered,"," where in New York City, ","you could be a tourist ","or you could be living here"," and you could <br>get yourself into a difficult situation."," So, it definitely <br>gives you a nice feeling of agency. ","But, I don’t know."," I have some deep thoughts about ","Japan and their society ","and the kind of <br>agency that’s provided because"," it seems like <br>it’s only provided to Japanese people. ","So that’s something I’m considering."," Because actually, ","when I go to Japan,"," I’m not perceived as Japanese at all. ","I have to go around telling people,"," purposefully saying things in Japanese to"," make people see that I’m Japanese."," So it’s a very different experience.")
  p.subtitleArray4.push("Do you ever have feelings of"," you wishing you looked full Japanese? ","So people would <br>automatically know that you were Japanese ","just by your appearance? ","Um… no. Only because ","I found that ","my appearance is one of the only ","unique things about me so,"," or at least it helps <br>speak to some of my identity."," Whereas I think if I was"," full Japanese then,"," well I just <br>wouldn’t be the same person right?"," Because then I’d be like ","“I don’t look American at all"," and people are<br> always thinking I’m Japanese.”"," But that’s a good question."," I never really thought about that."," Do you think <br>it impacts that you’re a male"," by the way, <br>that you feel that way?"," What way?"," Because I know being female ","there’s always a lot <br>of ideas and expectations ","of how we should <br>look and different things, ","especially in Japanese society ","and both American society."," I don’t know."," I’ve always grown up where"," I’ve been taught that Japan favors boys"," and the society is set up in that way."," So is that what you mean? ","That it would be easier to be a boy?<br> Or… ","No, I mean,"," just because you were born male ","that you don’t experience as much"," commentary about the way that you look ","or different expectations <br>on how you should present yourself. ","And so maybe that has helped you ","become more <br>comfortable with the way that you look. ","I think there’s<br> definitely something to that."," Because I think that’s <br>impacted my sisters’, both of them."," My sisters’ relationship with my mother ","because there was a whole lot of that,"," like how you present yourself,<br> how you dress."," And they’ve rebelled from that."," And so, that impacted their relationship ","and it kind of<br> carried over into other things ","so that’s very true what you’re saying."," And maybe like a lot of things,"," if it doesn’t directly impact you,"," you almost don’t even<br> think about it or consider it.")

}

//add data of time stamp copied and pasted from console
p.incertCue = () => {
  p.subtitleCueArray1.push(0,4.47562358276644,5.973310657596372,7.674172335600907,10.373492063492064,12.323968253968253,14.872358276643991,17.026009070294783,18.477256235827664,20.17231292517007,21.681609977324264,23.974580498866214,27.17312925170068,30.824467120181406,33.92433106575964,36.0721768707483,37.83108843537415,41.325691609977326,43.37485260770975,44.675170068027214,49.185646258503404,51.4321768707483,52.871814058956915,55.47244897959184,57.92215419501134,61.776666666666664,63.674897959183674,66.2755328798186,69.47408163265307,73.17766439909298,78.11770975056689,80.07399092970522,82.47145124716553,85.97185941043084,88.92079365079366,91.92197278911564,93.47190476190477,95.3759410430839,98.2319954648526,99.67163265306122,100.72233560090703,103.27072562358276,105.91780045351474,108.92478458049887,111.22356009070295,112.63417233560091,114.62528344671202,117.63226757369614,119.57113378684807,122.77548752834467,125.97403628117914,127.57040816326531,129.27126984126983,131.02437641723355,134.1822902494331,136.12696145124715,138.47217687074829,140.42845804988661,142.37312925170068,145.62392290249434,147.52215419501132,148.97340136054422,151.2721768707483,153.68124716553288,155.97421768707483,160.4266439909297,163.77612244897958,165.87172335600906)
  p.subtitleCueArray2.push(0,3.1288662131519276,4.481428571428571,5.979115646258504,9.229909297052155,11.627369614512471,13.8797052154195,15.487687074829932,17.827097505668934,20.776031746031745,24.125510204081632,26.43589569160998,28.728866213151928,33.030362811791385,34.493219954648524,38.84115646258503,42.02809523809524,45.83036281179138,47.67634920634921,51.82691609977324,55.228639455782314,57.98020408163265,61.080068027210885,62.4268253968254,63.72714285714286,67.12886621315192,68.33049886621315,70.13004535147392,71.83671201814059,73.92650793650793,75.23263038548752,78.431179138322,81.2291836734694,84.92696145124717,88.07907029478459,89.29231292517007,90.53458049886622,91.82909297052154,97.53539682539683,99.27689342403629,100.57721088435375,102.7773015873016,105.88297052154195)
  p.subtitleCueArray3.push(0,1.9098185941043084,3.7093650793650794,5.955895691609977,8.057301587301588,11.969863945578231,13.4559410430839,14.512448979591836,16.66609977324263,22.01829931972789,24.60732426303855,26.0527664399093,31.358526077097505,33.459931972789114,35.31172335600907,36.612040816326534,39.810589569160996,43.514172335600904,45.40659863945578,46.96233560090703,48.5587074829932,50.2537641723356,51.705011337868484,52.709274376417234,54.75843537414966,57.469365079365076,62.409410430839,63.81421768707483,65.80532879818594,68.00541950113379,70.25195011337868,72.65521541950113,74.10065759637189,77.06120181405896,79.65603174603174,82.07090702947846,83.06356009070295,84.45095238095239,85.86156462585033,88.71181405895692,92.00904761904762,93.86083900226757,97.11163265306122,98.51063492063491,101.20995464852608,104.80904761904762,106.66083900226758,107.61285714285714,108.80868480725624,112.15816326530613,115.05485260770975,117.90510204081633,120.40705215419501)
  p.subtitleCueArray4.push(0,1.7008390022675737,3.662925170068027,6.3651473922902495,8.10954648526077,13.601065759637189,16.62546485260771,18.895215419501135,21.3565306122449,24.398344671201816,26.691315192743765,29.460294784580498,31.695215419501135,33.239342403628115,34.62963718820862,36.493038548752835,38.06038548752834,40.64650793650794,43.94374149659864,45.354353741496595,46.6430612244898,49.391723356009074,54.79326530612245,57.097845804988665,58.943832199546485,60.24414965986394,61.44578231292517,64.03480725623582,67.65131519274377,70.43190476190476,71.97893424036282,74.73340136054422,76.23979591836735,78.17866213151927,81.18274376417233,83.28414965986394,87.347641723356,90.94383219954649,93.47770975056689,95.83453514739229,99.09693877551021,101.73820861678004,104.7858276643991,107.69412698412698,110.99136054421768,113.75163265306122,117.17108843537416,119.45503401360544,122.0440589569161,124.39507936507937)
}

}

let myp5Background = new p5(sketch1); 

let myp5canvas = new p5(sketch2); 
