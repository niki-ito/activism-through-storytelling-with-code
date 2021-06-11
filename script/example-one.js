//This sketch animates with time. Use the mouse to experience an illusion of perspective and depth.

//highlightMovement
let pointX = 400
let pointY = 0
let corner = 280
//highlightColor
let colG = 255
let colB = 255

//atmosphere
let atO = 0

//moving shadow
let shadeX = 100

////Mouse Xangle
let cameraX = 205
let camX = 215
let cupX = 145
//vase,plant,red,backcam,cards
let vaseX = 100
//reflectedplant
let reflect = 100
//wall
let angle = 300
let angle2 = 335
//other-cardwidthshadow
let cardW = 45

////MouseYangle
let table = 20
//camera1,cup,
let move5 = 300
let cupM = 3
//red,vase,leaf
let move1 = 300
let reflect2 = 100

function setup() {
  canvas = createCanvas(400, 400);
  canvas.style("width", "100%");
  canvas.style("height", "auto");
  canvas.parent("canvas");
  
  resetSketch();
  let btn = createButton("RESET");
  btn.mousePressed(resetSketch);
  btn.style("margin", "20px 0");
  btn.style("position", "absolute");
  btn.style("left", "49%");
}

function draw() {
  background(236, 231, 218);

//stops the change of color or opacity at specified value.
  if (atO > 100) {
    atO = 100;
  }
  if (colG < 123) {
    colG = 123
  }
  if (colB < -140) {
    colB = -140
  }

//create parallax effect
  cameraX = map(mouseX, 0, 400, 210, 205);
  camX = map(mouseX, 0, 400, 215, 210);
  cupX = map(mouseX, 0, 400, 145, 140);
  vaseX = map(mouseX, 0, 400, 100, 99);
  reflect = map(mouseX, 0, 400, 100, 102);
  angle = map(mouseX, 0, 400, 300, 299);
  cardW = map(mouseX, 0, 400, 45, 46);
  angle2 = map(mouseX, 0, 400, 335, 334.5);
  table = map(mouseY, 0, 400, 25, 20);
  move5 = map(mouseY, 0, 400, 305, 300);
  cupM = map(mouseY, 0, 400, 5, 3);
  move1 = map(mouseY, 0, 400, 301, 300);
  reflect2 = map(mouseY, 0, 400, 97, 100);


  background(236, 231, 218);
  noStroke();
  //glass
  fill(217, 223, 205);
  rect(0, 50, 300, 230);
  //atmosphereglass
  atO = atO + 1 / 10
  fill(72, 67, 92, atO);
  rect(0, 50, 300, 230);
  //highlight
  pointX = pointX - 0.2
  pointY = pointY + 0.2
  corner = corner + 0.05
  colG = colG - 1 / 10
  colB = colB - 3 / 10
  fill(255, colG, colB, 150);
  triangle(10, corner, pointX - 10, 280, pointX, pointY);
  triangle(30, corner, pointX, 280, pointX + 10, pointY + 10);
  //reflectedvase
  fill(59, 38, 29);
  rect(reflect + 18, reflect2 + 170, 40, 60, 3);
  ellipse(reflect + 38, reflect2 + 170, 40, 20);
  rect(reflect + 30.5, reflect2 + 150, 15, 15, 4);
  //cover
  fill(236, 231, 218);
  rect(0, 280, 400);
  rect(300, 0, 100, 400);
  //shadows
  shadeX = shadeX + 1 / 2
  fill(217, 210, 193);
  quad(0, 340, 0, 400, shadeX, 400, 400, 340);
  quad(300, 50, 300, 280, angle + 10, 290, angle + 10, 40);
  quad(0, 290, 310, 290, 305, 295, 0, 295);
  //medium
  fill(242, 238, 225);
  rect(0, 320, 400, table);
  quad(0, 50, angle, 50, 310, 40, 0, 40);
  quad(angle + 25, 40, 335, 50, 400, 50, 400, 40);
  //lights
  fill(255, 251, 240);
  rect(0, table + 320, 400, 10);
  quad(angle + 25, 40, angle + 25, 290, angle2, 280, angle2, 50);
  //vase
  fill(74, 46, 34);
  rect(vaseX, move1 - 30, 40, 57, 3);
  ellipse(vaseX + 20, move1 + 25, 40, 8);
  ellipse(vaseX + 20, move1 - 30, 40, 20);
  rect(vaseX + 12.5, move1 - 50, 15, 15, 4);
  //vaselights
  fill(145, 81, 54);
  rect(vaseX + 7, move1 - 30, 3, 5, 1);
  rect(vaseX + 11, move1 - 30, 5, 5, 1);
  rect(vaseX + 17, move1 - 30, 3, 5, 1);
  rect(reflect + 45, reflect2 + 172, 8, 3, 2);
  rect(reflect + 45, reflect2 + 177, 8, 3, 2);
  //mask
  fill(236, 231, 218);
  rect(140, 280, 300, 10);
  //cards
  fill(227, 207, 216);
  rect(vaseX + 155, 255, 65);
  fill(46, 41, 43);
  rect(vaseX + 190, 260, 25);
  noFill();
  stroke(128, 124, 126);
  rect(vaseX + 200, 267, 50, 50, 7)
  rect(vaseX + 203, 270, 50, 40, 5)
  noStroke();
  fill(227, 215, 200);
  rect(vaseX + 215, 240, 85, 80);
  fill(233, 230, 235);
  rect(vaseX + 255, 245, 45, 75);
  rect(vaseX + 150, 285, 70, 35);
  //maroond details
  fill(94, 52, 76);
  circle(vaseX + 273, 278, 4);
  circle(vaseX + 268, 274, 4);
  circle(vaseX + 284, 268, 4);
  circle(vaseX + 283, 278, 4);
  circle(vaseX + 287, 274, 4);
  circle(vaseX + 273, 300, 4);
  circle(vaseX + 266, 295, 4);
  circle(vaseX + 274, 290, 4);
  circle(vaseX + 267, 284, 4);
  circle(vaseX + 280, 300, 4);
  circle(vaseX + 290, 295, 4);
  circle(vaseX + 282, 290, 4);
  circle(vaseX + 286, 284, 4);
  quad(vaseX + 185, 295, vaseX + 173, 308, vaseX + 172, 292, vaseX + 175, 303);
  quad(vaseX + 166, 295, vaseX + 168, 305, vaseX + 163, 310, vaseX + 173, 308);
  quad(vaseX + 176, 320, vaseX + 173, 315, vaseX + 169, 320, vaseX + 173, 308);
  stroke(94, 52, 76);
  line(vaseX + 173, 308, vaseX + 179, 311);
  line(vaseX + 270, 265, vaseX + 270, 300);
  line(vaseX + 285, 260, vaseX + 285, 304);
  //camera
  fill(46, 41, 43);
  rect(vaseX + 80, move1 - 3, 50, 27, 3);
  stroke(245, 242, 235, 90);
  ellipse(vaseX + 105, move1 + 15, 20);
  noStroke();
  fill(23, 19, 21);
  rect(cameraX, move5 - 5, 60, 35, 3);
  //details
  //blackhair
  ellipse(vaseX + 240, 260, 20);
  ellipse(vaseX + 240, 250, 10, 7);
  ellipse(vaseX + 245, 253, 10);
  //clothes
  quad(vaseX + 230, 290, vaseX + 255, 270, vaseX + 255, 320, vaseX + 220, 320);
  fill(199, 151, 62);
  quad(vaseX + 233, 295, vaseX + 240, 295, vaseX + 238, 310, vaseX + 230, 310);
  //otherdetail_yellow
  quad(vaseX + 195, 295, vaseX + 203, 297, vaseX + 203, 308, vaseX + 180, 313);
  //other-red-green
  fill(189, 63, 49);
  rect(vaseX - 60, move1 - 15, 40, 43, 2);
  fill(vaseX - 49, 102, 45);
  stroke(181, 169, 89);
  rect(vaseX - 55, move1 - 10, 30, 33);
  //face
  noStroke();
  fill(247, 237, 225);
  //white detail
  ellipse(vaseX + 240, 266, 15, 18);
  quad(vaseX - 40, move1 - 5, vaseX - 35, move1 + 7, vaseX - 40, move1 + 19, vaseX - 45, move1 + 7);
  //yellow details
  fill(199, 151, 62);
  circle(vaseX - 40, move1 - 4, 4);
  circle(vaseX - 45, move1 - 3, 4);
  circle(vaseX - 47, move1 - 2, 4);
  circle(vaseX - 35, move1 - 3, 4);
  circle(vaseX - 33, move1 - 2, 4);
  circle(vaseX - 53, move1 - 8, 2);
  circle(vaseX - 27, move1 - 8, 2);
  circle(vaseX - 27, move1 + 21, 2);
  circle(vaseX - 53, move1 + 21, 2);
  //stem
  noFill();
  stroke(125, 97, 49);
  curve(400, 400, vaseX + 170, move1 - 160, vaseX + 20, move1 - 50, 200, 400);
  //reflect
  curve(400, 400, reflect + 170, reflect2 + 70, reflect + 38, reflect2 + 150, 200, 400);
  //leafright
  noStroke();
  fill(125, 97, 49);
  ellipse(reflect + 100, reflect2 + 100, 25, 20);
  ellipse(reflect + 85, reflect2 + 85, 25, 15);
  ellipse(reflect + 60, reflect2 + 105, 27, 15);
  ellipse(reflect + 40, reflect2 + 130, 25, 20);
  ellipse(reflect + 120, reflect2 + 75, 28, 20);
  ellipse(reflect + 140, reflect2 + 85, 25, 15);
  ellipse(reflect + 150, reflect2 + 70, 15, 20);
  ellipse(reflect + 170, reflect2 + 75, 15, 20);
  //leafleft
  ellipse(reflect + 20, reflect2 + 70, 30, 25);
  ellipse(reflect + 10, reflect2 + 55, 30, 25);
  ellipse(reflect + 20, reflect2 + 120, 15, 20);
  ellipse(reflect + 30, reflect2 + 110, 15, 20);
  //leafsmall
  ellipse(vaseX - 30, move1 - 120, 10, 5);
  ellipse(vaseX - 10, move1 - 98, 10, 4);
  ellipse(vaseX - 5, move1 - 95, 10, 5);
  //reflect
  ellipse(reflect - 10, reflect2 + 80, 10, 5);
  ellipse(reflect + 10, reflect2 + 102, 10, 4);
  ellipse(reflect + 15, reflect2 + 105, 10, 5);
  //lightleafright
  fill(184, 178, 138);
  noStroke();
  ellipse(vaseX + 45, move1 - 80, 25, 20);
  ellipse(vaseX + 80, move1 - 105, 27, 20);
  ellipse(vaseX + 85, move1 - 130, 30, 20);
  ellipse(vaseX + 100, move1 - 110, 25, 20);
  ellipse(vaseX + 120, move1 - 145, 28, 20);
  ellipse(vaseX + 140, move1 - 140, 25, 15);
  ellipse(vaseX + 150, move1 - 150, 15, 20);
  ellipse(vaseX + 170, move1 - 152, 15, 20);
  //lightleafleft
  ellipse(vaseX + 25, move1 - 155, 30, 25);
  ellipse(vaseX + 40, move1 - 150, 20, 25);
  ellipse(vaseX + 35, move1 - 110, 10, 20);
  ellipse(vaseX + 20, move1 - 100, 15, 20);
  //lightleafsmall
  ellipse(vaseX - 25, move1 - 110, 10, 5);
  ellipse(vaseX - 17, move1 - 105, 10, 5);
  ellipse(vaseX, move1 - 90, 10, 3);
  ellipse(vaseX + 3, move1 - 85, 10, 5);
  //reflect
  ellipse(reflect - 5, reflect2 + 90, 10, 5);
  ellipse(reflect + 3, reflect2 + 95, 10, 5);
  //flower
  fill(199, 151, 62);
  ellipse(vaseX + 5, move1 - 80, 20);
  ellipse(vaseX + 15, move1 - 65, 20);
  //cup
  quad(cupX - 15, move5 + 15, cupX + 15, move5 + 15, cupX + 10, move5 + 30, cupX - 10, move5 + 30);
  ellipse(cupX, move5 + 15, 30, 10);
  ellipse(cupX, move5 + 30, 20, 3);
  quad(cupX - 15, move5 + 7, cupX + 15, move5 + 7, cupX + 5, move5 + 30, cupX - 5, move5 + 30);
  fill(145, 119, 70);
  ellipse(cupX, move5 + 7, 30, cupM);
  //lights
  //-camera
  fill(245, 242, 235, 100)
  rect(vaseX + 95, move1 + 1, 5, 3);
  rect(camX + 15, move5, 10, 3);
  rect(camX + 35, move5, 3, 3);
  rect(camX, move5, 3, 3);
  rect(camX, move5, 3, 10);
  noFill();
  stroke(245, 242, 235, 90);
  ellipse(camX + 30, move5 + 17, 24)

  //atmosphere
  fill(72, 67, 92, atO);
  noStroke();
  rect(0, 0, 400, 50);
  rect(300, 50, 100, 350);
  rect(0, 280, 300, 120);

  //maskcard
  rect(vaseX + 155, 255, cardW, 25);

  //highlights
  //vase
  fill(245, colG, colB, 100);
  rect(vaseX + 15, move1 - 30, 5, 50, 1);
  rect(vaseX + 29, move1 - 30, 5, 30, 1);
  rect(vaseX + 27, move1 - 30, 5, 30, 1);
  rect(vaseX + 35, move1 - 30, 3, 10, 1);
  rect(vaseX + 35, move1 - 30, 3, 3, 1);
  rect(vaseX + 23, move1 - 47, 3, 3, 1);
  rect(vaseX + 23, move1 - 43, 3, 3, 1);
  //vaseReflect
  rect(reflect + 40, reflect2 + 153, 3, 3, 1);
  rect(reflect + 40, reflect2 + 157, 3, 3, 1);
  rect(reflect + 48, reflect2 + 170, 3, 10, 1);
  rect(reflect + 52, reflect2 + 170, 3, 10, 1);
  //cam
  rect(cameraX + 57, move5 - 3, 2, 30, 3);
  rect(cameraX + 46, move5 + 13, 2, 4, 4);
  //-cup
  rect(cupX + 2, move5 + 15, 5, 5, 1);
  rect(cupX + 3, move5 + 9, 5, 2, 1);
  //-other
  rect(vaseX - 23, move1 - 13, 2, 10);
  rect(vaseX - 27, move1 - 13, 2, 20);

}

function resetSketch(){
//highlightMovement
 pointX = 400
 pointY = 0
 corner = 280
//highlightColor
 colG = 255
 colB = 255

//atmosphere
 atO = 0

//moving shadow
 shadeX = 100

}