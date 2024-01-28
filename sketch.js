let r, g, s;

function setup() {
   createCanvas(600, 600);
 }
 
 function draw() {
  
  r = map(mouseX, 0, windowWidth, 225, 0);
  g = map(mouseX, windowWidth, 0, 130, 0);
  s = map(mouseY, 0, windowHeight, 80, 150);
  strokeWeight(3);
  //red triangle
   fill(178-r, 30 -g, 10);
   quad(width-(s/5), 0+(s/5), width-(s/5), height-(s/5), 500+(s/5), height-(s/5), 220+(s/5), 375-(s/5));
 
   //bottom gray triangle
   fill(175+r, 180+g, 186);
   triangle(219+(s/5), 344+(s/5), 530-(s/5), height-(s/5), 219+(s/5), height-(s/5));
 
   //top middle triangle
   fill(209-r, 202-g, 192);
   quad(219+(s/5), 374-(s/5), 219+(s/5), 0+(s/5), 315-(s/5), 0+(s/5), 447-(s/5), 150+(s/5));
 
   //top right triangle
   fill(108+r, 98+g, 99);
   triangle(width-(s/5), 0+(s/5), 447-(s/5), 181-(s/5), 282+(s/5), 0+(s/5));
 
   //black triangle
   fill(44-r, 40-g, 39);
   beginShape();
   vertex(250-(s/5), height-(s/5));
   vertex(250-(s/5), 0+(s/5));
   vertex(225-(s/5), 0+(s/5));
   vertex(0+(s/5), 225-(s/5));
   vertex(0+(s/5), 350-(s/5));
   endShape(CLOSE);
 
   //top left triangle
   fill(168+r, 172+g, 181);
   triangle(0+(s/5), 0+(s/5), 225-(s/5), 0+(s/5), 0+(s/5), 225-(s/5));
 
   //bottom white triangle
   fill(223-r, 216-g, 208);
   triangle(248-(s/5), height-(s/5), 125, 445+(s/5), 0+(s/5), height-(s/5));
 
   //yellow triangle
   fill(210+r, 161+g, 69);
   triangle(0+(s/5), height-(s/5), 140-(s/5), 476-(s/5), 0+(s/5), 320+(s/5));
  


   /*//red triangle
   fill(178, 35, 19);
   quad(width, 0, width, height, 500, height, 250, 375);
 
   //bottom gray triangle
   fill(175, 180, 186);
   triangle(250, 375, 500, height, 250, height);
 
   //top middle triangle
   fill(209, 202, 192);
   quad(250, 375, 250, 0, 315, 0, 460, 150);
 
   //top right triangle
   fill(108, 98, 99);
   triangle(width, 0, 460, 150, 315, 0);
 
   //black triangle
   fill(44, 40, 39);
   beginShape();
   vertex(250, height);
   vertex(250, 0);
   vertex(225, 0);
   vertex(0, 225);
   vertex(0, 350);
   endShape(CLOSE);
 
   //top right triangle
   fill(168, 172, 181);
   triangle(0, 0, 225, 0, 0, 225);
 
   //bottom white triangle
   fill(223, 216, 208);
   triangle(250, height, 125, 475, 0, height);
 
   //yellow triangle
   fill(210, 161, 69);
   triangle(0, height, 125, 475, 0, 350);*/
 }