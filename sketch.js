const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
const Constraint=Matter.Constraint
var engine,world
var score=0;
function setup() {
  createCanvas(800,800);
  stroke(255)
  engine=Engine.create()
  world=engine.world
  ground1=new Ground(300,780,1000,50);
  ground2=new Ground(600,450,200,10);
  box1=new Box(600,410,30,30);
  box2=new Box(570,410,30,30);
  box3=new Box(630,410,30,30);
  box4=new Box(660,410,30,30);
  box5=new Box(600,410,30,30);
  box6=new Box(570,410,30,30);
  box7=new Box(660,410,30,30);
stone=new Stone(100,400,30,30);
sling=new Slingshot(stone.body,{x:100,y:400})
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine)
  textSize(30);
  stroke("white");
  fill("white");
  text("score"+ score,width -300,75);
 ground1.display();
 ground2.display();
 box1.display();
 box1.score();
 box2.display();
 box2.score();

 box3.display();
 box3.score();

 box4.display();
 box4.score();

 box5.display();
 box5.score();

 box6.display();
 box6.score();

 box7.display();
 box7.score();


stone.display();
sling.display();


  
 
}
function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased()
{
  sling.fly()
}
