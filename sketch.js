function setup() {
  createCanvas(600, 400);
  background(255);
}

// shapes
function draw() {
  // Ellipse 
  fill((frameCount * 2) % 256, 100, 150);
  ellipse(mouseX, mouseY, 20, 20);

  // Square
  fill((frameCount * 3) % 256, 50, 200);
  square(mouseX, mouseY, 50);

  // Triangle 
  fill(150, (frameCount * 4) % 256, 50);
  triangle(mouseX, mouseY, mouseX + 30, mouseY + 55, mouseX + 58, mouseY + 20);

  // Line 
  stroke((frameCount * 5) % 256, 150, 50);
  line(mouseX, 200, 200, mouseY);
}

function multiply (){
  (x,y)
}

function mousePressed() {
  clear();
  background(255);
}
