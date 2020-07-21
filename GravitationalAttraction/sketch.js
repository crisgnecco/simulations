let moverA;
let sun

function setup() {
  
  createCanvas(400, 400);
  
  moverA = new Mover(200,100,2); 
  moverB = new Mover(200,100,2); 
  attractor = new Mover(height/2,width/2,10); 
  background(0);

}


// this funtion is executed as a while until the program is stopped
function draw() {

  
  background(0,5);
  
  attractor.attracts(moverA)
  
  moverA.update();
  moverA.show();
  
  attractor.attracts(moverB)
  
  moverB.update();
  moverB.show();
  attractor.show();
  
}