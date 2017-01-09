
var lifetime=300;
var speed=.3;
var count=0;                  //Number of frames
var populationSize=100;
var color1,color2
var  frames;
var averageP;
var bestP;
var goal;
function setup() {
  createCanvas(1024, 600);
  color2=color(20,20,20);
  color1=color(0,213,255);
  rkt=new Rocket();
  population=new Population();
  bestP=createP();
  averageP=createP();
  bestP.html('max-fitness');
  averageP.html("averageFitness");
  frames=createP();
  goal=createVector(width/2,40);
}

function draw() {
  setGradient(0,0,width,height,color1,color2,2);
  population.create();
  count++;
   frames.html(count);
   noStroke();
   fill(58,123,213);
   ellipse(goal.x,goal.y,30,30);

   if(count==lifetime){
     population.evalPopulation();
     population.selection();
     count=0;
   }
}


function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == 2) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == 1) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}