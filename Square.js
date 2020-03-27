class Square {
    constructor(x,y,s) {
      var options = {
       isStatic: true
      }
      this.body = Bodies.square(x,y,s);
      //this.width = width;
      //this.height = height;
      World.add(world, this.body);
      }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
      rect(pos.x, pos.y, this.s);
    }    
  };
  