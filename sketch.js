var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
thickness= random(22,83);

speed = random(223,321);
weight = random(30,52);

bullet = createSprite(50, 200, 20, 40);
bullet.velocityX = speed;

wall = createSprite(1200,200,thickness,height/2);
}

function draw() {
  background(0,0,0);  
 
  //bullet.collide(wall);

 if(hasCollided(bullet,wall)){
bullet.velocityX = 0;
var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage> 10)
{
wall.shapeColor= ("red");
}

if(damage<10)
{
wall.shapeColor= ("green");
}
 }
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true;  
}
 return false;
}