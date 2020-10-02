var bullet,wall;
var speed,weight;
var bullet1,wall1;
var bullet2,wall2;
var bullet3,wall3;
var line;
var line1;
var line2;
var line3;


function setup() {
  createCanvas(1600,1000);

speed=random(20,30)

weight=random(400,1500)

bullet=createSprite(50,70,50,50);
bullet1=createSprite(170,270,50,50);
bullet2=createSprite(220,470,50,50);
bullet3=createSprite(340,670,50,50);


bullet.velocityX=speed;
bullet.shapeColor=color(255);
bullet1.velocityX=speed;
bullet1.shapeColor=color(255);
bullet2.velocityX=speed;
bullet2.shapeColor=color(225);
bullet3.velocityX=speed;
bullet3.shapeColor=color(255);

wall=createSprite(1500,65,30,100)
wall.shapeColor=color(80,80,80)
wall1=createSprite(1500,265,30,100)
wall1.shapeColor=color(80,80,80)
wall2=createSprite(1500,465,30,100)
wall2.shapeColor=color(80,80,80)
wall3=createSprite(1500,665,30,100)
wall3.shapeColor=color(80,80,80)

line=createSprite(800,170,1600,20);
line.shapeColor=color("white");
line1=createSprite(800,370,1600,20);
line1.shapeColor=color("white");
line2=createSprite(800,570,1600,20);
line2.shapeColor=color("white");
line3=createSprite(800,770,1600,20);
line3.shapeColor=color("white");

}

function draw(){
  background(0);

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }
  if(wall1.x-bullet1.x<(bullet1.width+wall1.width)/2){
    bullet1.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet1.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet1.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet1.shapeColor=color(0,255,0);
    }
  }

  if(wall2.x-bullet2.x<(bullet2.width+wall2.width)/2){
    bullet2.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet2.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet2.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet2.shapeColor=color("red");
    }
  }

  if(wall3.x-bullet3.x<(bullet3.width+wall3.width)/2){
    bullet3.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      bullet3.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      bullet3.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      bullet3.shapeColor=color(0,255,0);
    }
  }

  

  drawSprites();
}