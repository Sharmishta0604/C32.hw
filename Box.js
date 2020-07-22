class Box {
  constructor(x, y, width, height, angle) {
    //super(x,y,width,height);
    //this.image = loadImage("sprites/wood1.png");
    var options = {
            'restitution':0.8,
            'friction':2.0,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage("square.png");
        this.Visibility=255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<4){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //fill(195,185,0);
        imageMode(CENTER);
        image(this.image,0, 0, this.width, this.height);
        pop();
        
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 10;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, 30, 30);
        pop();
        
      }
      
      }
  score(){
    if(this.Visibility<5 && this.Visibility>-10){
      score++;
    }
  }

};
