class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':5.0
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.width = 40;
       this.height = 40;
        //this.image = loadImage("pngfuel.com.png");
        World.add(world, this.body);
      }
      display(){
        var posX = this.body.positionX;
        var posY = this.body.positionY;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        fill("grey");
        rectMode(CENTER);
        rect(0, 0, 40, 40);
        pop();
      }
};