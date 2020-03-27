class Triangle {
 constructor(x1,y1,x2,y2,x3,y3) {
  var options = {
   isStatic: true
  } 
  this.body = Bodies.triangle(x1,y1,x2,y2,x3,y3,options);
  //this.width = width;
  //this.height = height;
  World.add(world, this.body);
 }
 display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill(255);
  rect(pos.x, pos.y, this.width, this.height);
 }    
};
  