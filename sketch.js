var ground



function setup() {
  createCanvas(800,480);
  
var ground = new Ground(780,480,20,20)


}

function draw() {
  background(0,0,0);  
  drawSprites();

  ground.display();

}