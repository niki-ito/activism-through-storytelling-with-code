function drawButtons() {
  //create and style the play button
  button = createButton("&#9654");
  button.position(345,665);
  button.style("background-color:black");
  button.style("color: grey");
  button.style("border: 0px");
  button.style("font-size:1.4rem");
  button.parent("button");
  
  //create and style the exit button
  buttonX = createButton("&#10006");
  buttonX.position(665,5);
  buttonX.style("background-color:black");
  buttonX.style("color: grey");
  buttonX.style("border: 0px");
  buttonX.style("font-size:1.4rem");
  buttonX.parent("button-exit");  
}