class Mover{

  constructor(x,y,m){
    
    this.pos = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);
    this.m = m;
    this.r = sqrt(this.m);

  }
  
  
  applyedForce(force){
    
    // if I do this, I'd modify the argument
    //force.div(this.m); 
      
    let f = p5.Vector.div(force,this.m);
    
    // sum of forces
    this.acc.add(f);
    
  }

  attracts(mover){
   
      // obtains the vector's direction
      let force = p5.Vector.sub(this.pos, mover.pos);

      // magSq does not modify the vector
      let distSq = force.magSq();
    
      // constrain the distance used to calculate the force other way if          the distance is too small or too big, it couldn't be shown on            the screen
      dist = constrain(dist,5,10);
      force.normalize();

      // obtains the vector's magnitude
      let G = 10;

      force.setMag( G * mover.m * this.m / distSq);

      mover.applyedForce(force);

  }
  

  update(){
    
    // static acceleration 
    this.vel.add(this.acc); //changes vel
    this.pos.add(this.vel); //changes pos
    

    //cleaning the acceleration. If the force goes away then I don't want to keep aplying the acceleration.
    this.acc.set(0,0);
  }
  
  show(){
     
    // border color
    stroke(255);
    // border weigth
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x,this.pos.y,this.r * 5);
    
  }
  
}
