function colorDeOtraMitad() {
  if  (mouseX >400 && mouseY<120) {
    color1=color(0, 255, 0);
  }
}



function mouseDentroDelRectagulo( posX, posY) {
  if (mouseX >posX && mouseY>posY) {
    return true ;
  } else {
    return false;
  }
}
