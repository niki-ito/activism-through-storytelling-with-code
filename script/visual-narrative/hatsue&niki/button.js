function drawButton() {
    button = createButton("&#9654");
    button.mousePressed(togglePlaying);
    button.position(340,670);
    button.style("background-color:black");
    button.style("color: white");
    button.style("border: 0px");
    button.style("font-size:1.4rem");
  }
  
  function togglePlaying(){
    if (!myAudio.isPlaying()){
      myAudio.play();
      button.html("&#10074&#10074");
    } else {
      myAudio.pause();
      button.html("&#9654");
    }
    
  }