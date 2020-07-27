var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  car.shapeColor="blue";
  
  wall=createSprite(1500,200,60,height/2);
  car.collide(wall);
  speed=random(55,180);
  weight=random(400,1500);
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed;
  
  if (car.velocityX>100){
  car.shapeColor="green";
  }

  if (car.velocityX<100){
  car.shapeColor="yellow";
  }

  if (car.velocityX>180){
  car.shapeColor="red";
  }

  drawSprites();
}