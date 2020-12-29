var a;
var circles=[];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  createCanvas(1600,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
  stand1 = new Ground(800,700,230,10);
  stand2 = new Ground(1300,200,170,10);
  // bottom
  block1 = new Box(800,670,30,40);
  block2 = new Box(770,670,30,40);
  block3 = new Box(740,670,30,40);
  block4 = new Box(710,670,30,40);
  block5 = new Box(830,670,30,40);
  block6 = new Box(860,670,30,40);
  block7 = new Box(890,670,30,40);
  // second level
  block8  = new Box(800,630,30,40);
  block9  = new Box(770,630,30,40);
  block10 = new Box(740,630,30,40);
  block11 = new Box(830,630,30,40);
  block12 = new Box(860,630,30,40);
  // third level
  block13 = new Box(800,590,30,40);
  block14 = new Box(770,590,30,40);
  block15 = new Box(830,590,30,40);
  // top
  block16 = new Box(800,550,30,40);
  // starting second obstacle
  // bottom
  block17 = new Box(1300,175,30,40);
  block18 = new Box(1270,175,30,40);
  block19 = new Box(1240,175,30,40);
  block20 = new Box(1330,175,30,40);
  block21 = new Box(1360,175,30,40);
  // middle
  block22 = new Box(1300,135,30,40);
  block23 = new Box(1270,135,30,40);
  block24 = new Box(1360,135,30,40);
  // top
  block25 = new Box(1300,95,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:200});

  imageMode(CENTER);
  image(polygon.png,polygon.poosition.x,polygon.position.y,40,40);

}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 block17.display();
 block18.display();
 block19.display();
 block20.display();
 block21.display();
 block22.display();
 block23.display();
 block24.display();
 block25.display();

 polygon.display();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged()
{
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    Matter.Body.setPosition(polygon.body,{x:190,y:30});
    slingshot.attach(polygon.body);
  }
}