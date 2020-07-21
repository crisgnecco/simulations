let moverA;
let moverB

var movers = [];
function setup() {
  
  createCanvas(400, 400);
  
  moverA = new Mover(200,100,2); 
  moverB = new Mover(300,100,4); 
  
  movers.push(moverA);
  movers.push(moverB);
  
}


// this funtion is executed as a while until the program is stopped
function draw() {

  
  background(0);
  
  for(let mover of movers){
    
    if(mouseIsPressed){
     let wind = createVector(0.1,0);
     mover.applyedForce(wind);
    }
 
    let gravity = createVector(0,0.2);
  
    //"Acceleration due to gravity is independent of mass"
    // inside these methods I'm multiplying and dividing
    let weight = p5.Vector.mult(gravity,mover.m);
    mover.applyedForce(weight);

    if(mover.pos.y >= height/2 ){
      mover.drag(0.3);
    }
  
    mover.update();
    mover.edges();
    mover.show();
  }
  
}