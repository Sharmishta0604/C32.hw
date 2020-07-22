const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box;
var poly,string;
var gamestate="attchd"
var score=0;
var color;

function setup() {
  var canvas=createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  poly=new Ball(200,300,40,40);
  string=new SlingShot(poly.body,{x:200,y:270});
  platform1=new Ground(600,317,200,20)
  //fill("white");
  box1=new Box(600, 280, 30, 30);
  box12=new Box(600, 240, 30, 30);
  box15=new Box(600, 180, 30, 30);


  //fill("blue");
  box2=new Box(630, 280, 30, 30);
 box3=new Box(570, 280, 30, 30);
  
 box4=new Box(660, 280, 30, 30);
  box5=new Box(540, 280, 30, 30);
  
  box6=new Box(615, 260, 30, 30);
  box7=new Box(585, 260, 30, 30);
  box8=new Box(645, 260, 30, 30);
  box9=new Box(555, 260, 30, 30);

  box10=new Box(630, 240, 30, 30);
  box11=new Box(570, 240, 30, 30);
  
  box13=new Box(615, 200, 30, 30);
  box14=new Box(585, 200, 30, 30);

  

}

function draw() {
  Engine.update(engine);
  getTime();
  if(color=true){
    background(0,0,100);
  }
  else if(color=false){
    background(180,180,255);
  }
  box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  platform1.display();
  poly.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  

  textSize(20);
  fill("white");
  text("Score:"+score,50,50);
  string.display();
 drawSprites();
}

function mouseDragged(){
  if(gamestate==="attchd"){
    Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  string.fly();
  gamestate==="gone";
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(poly.body,{x:200,y:300});
    string.attach(poly.body);
  }
}

async function getTime(){
  var time=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var timeJson=await time.json();
  var daytime=timeJson.datetime;
  //var color;
  //console.log(hour);

  if(hour>6 && hour<18){
      color=true;
  }

  else{
      color=false;
  }
}