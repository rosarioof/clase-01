var a =50;
var c;
function setup() {
createCanvas(windowWidth, windowHeight);
}
// ESTO VENDRIA siendo el espacio de dibujo de 400x400

function draw() {
 
  //background(5,240,20);
 // background(220);esto seria negro
  //background(0,255,0) verde
  colorMode(HSB,360,100,100);
  //background(0,100,100);
  //fill(0,50,100) pelotitas rojas en el pulsor 
  fill(random(0,40),100,100);
  // relleno rojo, con la mitad de saturacion 50, brillo al maximo
  noStroke();
  c = a * random(1,5);
  ellipse(mouseX,mouseY,c,c);
  
  
}







