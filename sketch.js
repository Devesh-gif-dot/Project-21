var wall,thickness;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);

  bullet = createSprite(200,200,30,30);
  bullet.shapeColor = "whitess";

  thickness = random(22,83);

  speed = random(223,331);
  weight = random(30,52);
  
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);


  bullet.velocityX = speed;
  bullet.depth = wall.depth+1;

}

function draw() {
  background('black');
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(isCollide(bullet,wall)){
    bullet.velocityX = 0;
    if(damage<10){
      bullet.shapeColor = "green";
    }
    if(damage>=10){
      bullet.shapeColor = "red";
    }
  }

  drawSprites();
}

function isCollide(object1,object2){
  if(object2.x-object1.x <= object2.width/2 + object1.width/2){
    return true;
  }
  else{
    return false;
  }

}