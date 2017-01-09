
function Rocket(rocketDNA) {

  if (rocketDNA) {
    this.dna = rocketDNA;
  }
  else {
    this.dna = new DNA();
  }

  //create kinetic vectors
  this.position = createVector(width / 2, height);
  this.velocity = createVector();
  this.acceleration = createVector();
  this.fitness;
  this.completed=false;

  this.applyForce = function (force) {
    this.acceleration.add(force) //Assuming unit mass
  }

  this.calcFitness = function () {
    var d = dist(this.position.x, this.position.y, goal.x, goal.y);
    this.fitness = map(d, 0, width, width, 0);  //Map d which has range from 0 to width and sort of map it to width to 0 inverting that
  }

  //After each frame update values
  //Main phyiscs code
  this.update = function () {
    var d=dist(this.position.x,this.position.y,goal.x,goal.y);
    if(d<30){
      this.completed=true;
      this.position=goal.copy();          //Magnet action
    }
if(!this.completed){      //Only udate if not reached destination;
    this.applyForce(this.dna.genes[count]);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);    //clear out acceleration
}
}

  //How rocket looks like
  this.show = function () {
    push();     // Start a new drawing state
    translate(this.position.x, this.position.y);   //
    rectMode(CENTER)        //the location from which rectangles are drawn
    rotate(this.velocity.heading())       //velocity.heading() gives oout direction of velocity
    fill(255,100);
    noStroke();
    triangle(0, 3, 0, -3, 20, 0);
    pop();        // Restore original state
  }

}