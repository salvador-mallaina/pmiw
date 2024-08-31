function  grilla (mod ) {
  if (mouseX<400) {
    for ( let i = 0; i< 804; i+=mod ) {  //mod = tamaño de celda
      for ( let j = 0; j < 400; j+=mod ) {
        //println( i + " / " + j);
        if ((i+j)%2==0) {
          fill(color2);
        } else {
          fill(color1);
        }
        rect( i, j, mod, mod );
      }
    }
  }

  if (mouseX >400) {
    for ( let i = 0; i < 804; i+=mod) { // tam =tamaño de circulo
      for (let j = 0; j < 400; j +=mod) {
        if ((i+j)%2==0) {
          fill(color1);
        } else {
          fill(color2);
        }
        let mov =map(mouseX+mouseY, 600, 100, 0, 100);
        rect( i, j, mod+mov, mod+mov );
      }
    }
  }
}

function  circulos(tam) {
  if (mouseX<400) {
    for ( let h = 0; h < cant; h++) { // tam =tamaño de celda
      for (let t = 0; t < cant; t ++) {
        if ((h+t)%2==0) {
          fill(color1);
        } else {
          fill(color2);
        }
        ellipse(h*tam+tam/2, t*tam+tam/2, tam, tam);
      }
    }
  }
  if (mouseX>400) {
    for ( let h = 0; h < 6; h++) { // tam =tamaño de celda
      for (let t = 0; t < 3; t ++) {
        if ((h+t)%2==0) {
          fill(color1);
        } else {
          fill(color2);
        }
        let mov =map(mouseX+mouseY, 600, 100, 0, 100);
        ellipse(h*tam+tam/2, t*tam+tam/2, tam+mov, tam+ mov);
      }
    }
  }
}
