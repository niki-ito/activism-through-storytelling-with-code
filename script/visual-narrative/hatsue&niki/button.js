function drawButtons() {
  button = createButton("&#9654");
  button.mousePressed(togglePlaying);
  button.position(340,670);
  button.style("background-color:black");
  button.style("color: grey");
  button.style("border: 0px");
  button.style("font-size:1.4rem");
  
  buttonX = createButton("&#10006");
  buttonX.position(665,5);
  buttonX.style("background-color:black");
  buttonX.style("color: grey");
  buttonX.style("border: 0px");
  buttonX.style("font-size:1.4rem");
  
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