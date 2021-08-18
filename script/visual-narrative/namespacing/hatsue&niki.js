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

p.showCanvas = () => {
  document.getElementById("defaultCanvas0").style.visibility="visible";
  document.getElementById("container").style.visibility="visible";
}

p.hideCanvas = () => {
  p.pauseAnyAudio();
  document.getElementById("defaultCanvas0").style.visibility="hidden";
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

  p.displayImgTimerSubtitle();
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
  p.tint1,p.tint2,p.tint3,p.tint4;
  p.width = 800;
  p.height = 800;

  p.tint1 = p.map(p.mouseX+p.mouseY, 100, p.width, 255, 0);
  p.tint2 = p.map((p.mouseX)*-1+p.mouseY, p.width-100, 0, 255, 0);
  p.tint3 = p.map(p.mouseX+(p.mouseY)*-1, p.width-100, 0, 255, 0);
  p.tint4 = p.map(p.mouseY-(p.mouseX)*-1, p.width-100, 0, 255, 0);
  
  p.tint(255,p.tint4);
  p.image(imageNumber[3], 0, 0, p.width, p.height);
  
  p.tint(255, p.tint1);  
  p.image(imageNumber[0], 0, 0, p.width, p.height);
  
  p.tint(255, p.tint2);
  p.image(imageNumber[1], 0, 0, p.width, p.height);
  
  p.tint(255,p.tint3);
  p.image(imageNumber[2], 0, 0, p.width, p.height);  
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
  p.subtitleArray1.push("I remember actually making this", "certain thought recently <br>but at a certain point", "I start forgetting that I’m Asian", " or forgetting what I look like.", "Recently? Or… ", "No, I was realizing this recently<br> about my entire life", "forgetting what I look like and", "I disassociate a lot and I feel", "not embodied within my own self.", " I’ll see photos of me <br>and I’m like “That’s me”", " but a lot of the time I’m like", " “That’s not me.", " That’s just a character I’m playing in life”<br> kind of thing", " and my face and my mind<br> isn’t connected to that body.", " Because inside I feel so white ", "because I’d grown up around<br> so many white people ", "and that has made me forget that", " a lot of people assume<br> that I’m full Asian ", "just because I don’t know,", " I guess I look more ", "Japanese than white to a lot of people", " so a lot of people always<br> assume that I’m full.", " Whenever I look in the mirror ", "I have to really look at myself", " and I’m like “That’s me", " that’s me", "that’s me. I have that face.”", " And so that’s something I’m working on.", " Trying to remember or trying to identify ", "more with being Japanese", " and I feel that’s <br>something that’s been going on for… ", "five years? Probably", " ever since senior year of highschool", " because that’s when I changed my name.", " Okay. ", "So that was the first step of realizing.", " Because even though I am half white", " I don’t look half white", " and people always assume <br>that I’m Japanese", " and I feel like being half Japanese is ", "very much a part of my identity", " and so I need to lean into that more ", "because I feel I’ve neglected it", " for the other part of my life. ", "So a lot of that is why I want to ", "move to Japan and learn Japanese ", "and fully assimilate.", " But yeah.", "Being in Japan where everyone else", " looks like me", " and has dark eyes ", "and has dark hair", " and the thin eyes and <br>we all look very similar ", "and it’s very comforting for me. ", "Being from Hamilton<br> where there’s no Japanese people", " other than my mom,", "it always feels weird.", " And that’s why I like <br>being in Chinatown (NY)", "because there’s so many Asian people", " even though they are<br> all not technically Japanese", " I’m like “I like being here.”<br> You know.", " Yeah, like a sense of identity", " in terms of being Japanese lacks", " in terms of lacking the community, ", "I guess.", " But we have a strong community", "at our Buddhist temple", " where it’s majority Japanese people ", "because it’s a Japanese Buddhism", " and so that’s where I gained most of", " feeling like I’m Japanese ", "because of these people who are here.")
  p.subtitleArray2.push("So I’m very attached to smells", "and so there’s a lot of specific smells", "that I associate <br>with many different things.", "Like the bathroom in the beginning", "it kind of smelled like<br> my grandma’s bathroom", "and I’ll get really nostalgic about that.", "The smell of right<br> when you open <i>yakuruto</i>", "a specific memory in <br>my grandma’s apartment", "late at night, <br>they used to have", "a refrigerator next<br> to the toilet room", "and we would just walk down", "and I remember this specific feeling <br>of the wooden floors", "and her getting a <i>yakuruto</i> out <br>of the refrigerator for me", "and that smell, the wood floors", "also the cold refrigerator<br> and the opening of it.", "Ugh...", "And then we have blankets<br> at my<i> house</i> house", "that we have vacuum packed<br> just to keep for storage", "and they kind of still smell like<br> my grandma’s house of incense", "so I’m always smelling them.","Wow.<br> So your grandma that lives in Japan?","Yeah, in Japan.","Huh, is the incense from a…","I forget what you call it.","<i>Butsudan? Butsudan</i>. Ohh.","Yeah.","My grandma’s place has a butsudan too", "because my grandfather passed away<br> when I was born", "so we’ve always had a <i>butsudan</i><br> at my grandma’s place", "and we wouldn’t really have incense", "but there was a little bell <br>that we would always ring", "when we want to say something", "and then we would always give food.","Yeah.","So my grandma<br> passed away last summer.","In Japan? Yes.","So now they’re both in the shrine.","But my mom’s older sister", "they live in Saitama", "and so my grandma’s apartment<br> is in Yokosuka", "so they’re actually there now.","So they still kind of<br> go to that apartment.","They still have the apartment. ");
  p.subtitleArray3.push("I actually wore a yukata ","for my high school graduation."," Really?"," So senior year I really went hard."," Did it feel scary?"," To wear a yukata? No."," No, because I feel like senior year "," is when I started being like ","“I really don’t care what people think.” ","Really?"," Yeah, so I changed my name,<br> wore the yukata,"," and I had one person be like ","“Can I take a photo of you?”"," And I’m like <br>“I don’t know who you are but yes.” ","Then, yeah, <br>I kind of stopped caring what people think"," because why should you."," Then I got into design school<br> and art school"," and that’s very much the mentality of ","art kids I feel like."," Like you know,"," “We can do whatever we want because ","we’re artistic and ","we’re going to live life to the fullest.”"," That feels a lot like <br>the DAAP(College) mentality."," Then I was like<br> “Yeah, I’m going to shave my head.”"," So I shaved my head."," And I’m like “ I want to get a perm.”"," So we got a perm."," Because I can"," and I don’t care what other people think. ","Because I can <br>experience different hairstyles ","because I want to."," I don’t have to have a reason. ","Yeah.","<i> Ne.</i>"," Wow."," Do you feel comfortable, ","is it you reminding yourself<br> to feel comfortable"," or are you comfortable."," Uh, maybe I have to <br>remind myself sometimes."," Um, because this is<br> a little bit more curly ","than we did last time ","and I was like <br>“Oh my gosh it’s so curly.”"," But then I remember and I’m like ","“No, this looks cool.”"," Because the only reason<br> why I would not feel comfortable in it ","is because of what <br>other people think of it."," You know,"," but I’m like “No, I like it ","because I like it."," I don’t like it because <br>someone else is going to like it."," I like it because I like it"," and if someone else doesn’t like it,"," well, that’s not my problem.” ","Wow."," And I feel like that’s <br>very much my American mentality"," so I feel it’s good that I’m half ","because I get a little bit of that"," so that I can<br> remain confident while ","showing off being Japanese in my exterior.")
  p.subtitleArray4.push("I try to be confident"," because I’m not confident a lot."," So I just try to ","convince myself that I am maybe"," because I’m very homesick ","and I just want to be home"," and I have a lot of separation anxiety ","very attached to my house. ","Yeah, you know,"," deep down inside"," I don’t want to be here for a year, ","I really want to go home in August"," kind of thing."," But yeah, I realized that eventually ","I have to grow up ","so I might as well convince myself<br> that I can grow up ","until I have to."," So I’m not forced <br>at a singular moment like"," “Oh, you’ve got to move away."," You’ve got to do your own taxes."," You have to figure out your own life.”"," So right now I’m trying to ","do a little bit of it"," so I don’t have to. ","So I’m not <br>thrown into the deep end all at once."," But in terms of wanting to grow,"," not wanting to grow but ","trying to grow up is because ","I know that when my mother ","eventually passes away"," I’m going to be so wrecked"," because I’m very attached."," I’m very attached ","and so when she’s gone ","I know my whole life is going to shatter ","so I have to prepare myself. ","You know the book, <i>Crying in H Mart</i>?"," Yeah, I’ve heard of it."," I haven’t read it yet."," See I want to read it"," but I can’t yet. ","I have to read it while I’m at home"," because if I read it<br> while I’m not with my mother"," it’s going to wreck me."," Because it’s about ","the Japanese Breakfast,<br> the lead singer, ","it’s a memoir about her mom"," who had just passed away recently"," and her trying to rediscover herself ","because she was <br>also attached to her mother"," and I was like<br> “That book is going to wreck me too much"," I can’t read it.”"," Yeah.")

}

//add data of time stamp copied and pasted from console
p.incertCue = () => {
  p.subtitleCueArray1.push(0,2.327777777777778,5.752721088435374,8.057301587301588,9.792993197278912,10.849501133786848,14.40795918367347,16.579024943310657,20.282607709750568,23.713356009070296,26.203696145124717,27.718798185941043,28.264467120181404,31.759070294784582,34.58609977324263,40.69294784580499,45.087324263038546,48.65739229024943,52.192630385487526,54.90936507936508,56.24451247165533,58.28786848072562,60.8072335600907,63.08859410430839,64.74301587301588,66.00269841269841,67.14047619047619,69.13739229024944,72.38818594104309,75.14555555555556,76.99154195011337,79.44124716553289,82.30891156462584,84.29421768707483,85.54229024943311,86.54655328798187,90.04115646258504,91.78845804988661,93.41385487528345,95.61975056689343,98.34809523809524,100.9951700680272,103.81639455782313,106.86401360544218,110.24251700680271,113.29013605442177,117.15045351473923,119.75108843537414,121.53902494331066,124.63888888888889,125.8927664399093,127.04215419501134,129.10292517006803,132.03444444444443,134.14165532879818,137.19507936507935,138.14709750566894,141.39208616780044,144.3468253968254,145.5600680272109,148.21875283446713,151.79462585034014,154.04115646258504,155.59689342403627,158.5458276643991,159.71843537414966,162.64414965986396,163.90383219954649,165.75562358276645,167.94410430839002,170.69566893424036,173.64460317460316)
  p.subtitleCueArray2.push(0,2.3684126984126985,4.969047619047619,7.865736961451248,10.419931972789115,12.718707482993198,14.378934240362812,19.06936507936508,22.66845804988662,25.164603174603176,28.66501133786848,30.476167800453513,32.9781179138322,36.670090702947846,38.87018140589569,43.06718820861678,44.51843537414966,49.06374149659864,53.86446712018141,56.72052154195011,58.71743764172336,62.16560090702948,63.66909297052154,67.4191156462585,68.42918367346938,71.2678231292517,72.27789115646259,75.01784580498867,78.16995464852607,81.76904761904763,85.61775510204082,89.91925170068028,93.11780045351473,94.61548752834467,95.51526077097506,98.51643990929705,101.51181405895692,106.56795918367347,108.5242403628118,110.61984126984127,114.22473922902495,116.01267573696146,118.6191156462585)
  p.subtitleCueArray3.push(0,2.2000680272108846,4.144739229024943,4.649773242630386,9.049954648526077,10.199342403628117,12.695487528344671,15.203242630385487,16.747369614512472,18.500476190476192,18.9997052154195,22.256303854875284,24.897573696145123,25.901836734693877,28.194807256235826,33.90691609977324,37.656938775510206,40.69294784580499,42.04551020408163,44.04823129251701,45.058299319727894,46.79399092970522,48.448412698412696,50.8981179138322,54.003786848072565,57.04560090702948,58.456213151927436,60.99879818594104,62.56034013605442,64.09866213151928,65.34673469387755,67.69775510204082,69.00387755102041,70.40868480725624,71.26201814058957,72.7945351473923,74.50120181405896,76.80578231292517,82.04768707482994,84.20714285714286,87.2547619047619,90.348820861678,91.60269841269842,93.6982993197279,94.7490022675737,95.79970521541951,98.69639455782313,100.24632653061225,101.1577097505669,103.6074149659864,104.71036281179138,106.62020408163265,107.7173469387755,108.95961451247166,110.70691609977324,111.35707482993197,114.30600907029478,117.26074829931973,119.00804988662132,122.40977324263038)
  p.subtitleCueArray4.push(0,1.5673242630385487,4.38274376417236,6.530589569160997,9.171859410430839,11.261655328798186,12.672267573696145,16.31780045351474,18.26827664399093,21.118526077097506,22.01829931972789,23.376666666666665,24.57249433106576,25.87281179138322,30.365873015873017,31.764875283446713,34.71380952380952,37.5814739229025,40.33303854875283,42.17321995464852,43.76959183673469,45.81875283446712,47.76922902494331,50.271179138322,51.46700680272109,55.919433106575966,59.518526077097505,60.22673469387755,62.61839002267574,65.36995464852608,68.71943310657596,71.41875283446711,75.85956916099774,77.21793650793651,78.97104308390023,83.06936507936508,86.87163265306123,89.26909297052154,90.87126984126984,92.11934240362812,93.570589569161,95.46882086167801,97.72115646258503,99.97349206349206,102.22582766439909,104.66972789115647,107.57222222222222,111.36868480725623,113.56877551020408,115.86755102040816,118.22437641723356,120.6624716553288,122.11240362811791)
}

}


let myp5canvas = new p5(sketch2); 
