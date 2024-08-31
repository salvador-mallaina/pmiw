//salvador mallaina dominguez
//comision 4
//https://www.youtube.com/watch?v=TafcnN08a94
//profe el audio se escucha trabado y no supe como solucionarlo 


let  cant;
let color1;
let color2;
let ilusion;
function preload() {
  ilusion=loadImage("data/ilusionop.jpeg");
}

function  setup() {
  color1=color(52, 26, 211);
  color2 = color(0, 1, 39);
  createCanvas(800, 400);
  cant = 10;
}
function draw() {
  background(0);
  print(mouseX, mouseY);
  grilla(133);
  circulos(133);
  if (mouseDentroDelRectagulo(400, 266)) {
    color1 =color(200, 0, 0);
  } else {
    colorDeOtraMitad();
  }

  image(ilusion, 0, 0);
}
function mousePressed() {
  color1=color(random(0, 255), random(0, 255), random(0, 255));
  color2=color(random(0, 255), random(0, 255), random(0, 255));
}
function keyPressed() {
  if (key == 'r') {
    color1 = color( 52, 26, 211);
    color2= color(0, 1, 39);
    mouseX = 0;
    mouseY =0;
  }
}
