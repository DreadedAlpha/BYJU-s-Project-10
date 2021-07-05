var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red=createButton("RED");
    btn_red.position(100,200);
    btn_red.mousePressed(turnred);

  btn_green=createButton("GREEN");
    btn_green.position(300,200);
    btn_green.mousePressed(turngreen);

}

function draw() {
  background(r,g,b);

  text(mouseX+" "+mouseY,mouseX,mouseY);
}

// Change Screen Color
function turnred(){
  r = 255
  g = 0
  b = 0
}

function turngreen(){
  r = 0
  g = 255
  b = 0
}
 
