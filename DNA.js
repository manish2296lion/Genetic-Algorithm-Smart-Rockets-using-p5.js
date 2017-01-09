function DNA(newgenes){
  if(newgenes){
    this.genes=newgenes;
  }
  else{
  this.genes=[];
  for(var i=0;i<lifetime;i++){
      this.genes[i]= p5.Vector.random2D();
      this.genes[i].setMag(speed);
  }
  }

this.crossOver=function(partner){
  var newgenes=[];

  var midpoint=floor(random(this.genes.length));

  for(var i=0;i<lifetime;i++){
      if(i<midpoint){
        newgenes[i]=this.genes[i];
      }
      else{
        newgenes[i]=partner.genes[i];
      }
  }
  return new DNA(newgenes);
}

this.mutation=function(){
  for(var i=0;i<lifetime;i++){
      if(random(1)<0.001){
        this.genes[i]=p5.Vector.random2D();
        this.genes[i].setMag(speed);
      }
  }
}

}