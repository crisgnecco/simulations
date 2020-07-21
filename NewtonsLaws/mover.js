class Mover{

  constructor(x,y,m){
    
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.m = m;
    this.r = sqrt(this.m) * 10;

  }
  
  edges(){
    if(this.pos.y >= height - this.r){
        this.pos.y = height - this.r;
        this.vel.y *= -1;
    }
    if(this.pos.x >= width - this.r){
        this.pos.x = width - this.r;
        this.vel.x *= -1;
    }
    if(this.pos.x <= this.r){
        this.pos.x = this.r;
        this.vel.x *= -1;
    }

    
  }
  
  // it depends on the fluid constant and the object's velocity
  drag(dragC){

     // change direcion of drag
     let drag = this.vel.copy();
     drag.normalize();
     drag.mult(-1);
     
     //  set magnitud of drag
     let speedSq = this.vel.magSq();
     drag.setMag(speedSq * dragC);
    
     this.applyedForce(drag);

  } 

  
  applyedForce(force){
    
    // if I do this, I'd modify the argument
    //force.div(this.m); 
      
    let f = p5.Vector.div(force,this.m);
    
    // sum of forces
    this.acc.add(f);
    
  }

  

  update(){
    
    // static acceleration 
    this.vel.add(this.acc); //changes vel
    this.pos.add(this.vel); //changes pos
    

    //cleaning the acceleration. If the force goes away then I don't want to keep aplying the acceleration.
    this.acc.set(0,0);
  }
  
  show(){
    
    // border
    noStroke();
    // fills in a color. 255 is white. 50 is the intensity
    fill(255,60);
    rect(0,height/2, width, width / 2);
    
    
    // border color
    stroke(255);
    // border weigth
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x,this.pos.y,this.r * 2);
  }
  
}
