var car1,car2,car3,car4,wall;
var speed,weight1,weight2,weight3,weight4;
var line1,line2,line3;


function setup() {
  createCanvas(1600,700);

  car1=createSprite(50, 100, 80, 50);
  car2=createSprite(50, 250, 80, 40);
  car3=createSprite(50, 400, 70, 50);
  car4=createSprite(50, 550, 80, 50);


wall=createSprite(1300,74,60,120);
 wall.shapeColor=color(80,80,80);

  wall=createSprite(1300,227,60,120);
  wall.shapeColor=color(80,80,80);

  wall=createSprite(1300,374,60,120);
  wall.shapeColor=color(80,80,80);

  wall=createSprite(1300,523,60,120);
  wall.shapeColor=color(80,80,80);
 
line1=createSprite(800,150,1600,10);
line1.shapeColor=color("pink");

line2=createSprite(800,300,1600,10);
line2.shapeColor=color("pink");

line3=createSprite(800,450,1600,10);
line3.shapeColor=color("pink");

line4=createSprite(800,600,1600,10);
line4.shapeColor=color("pink");

speed=random(55,90);
car1.velocityX=speed;
weight1=random(400,1500);

speed=random(55,90);
car2.velocityX=speed;
weight2=random(400,1500);

speed=random(55,90);
car3.velocityX=speed;
weight3=random(400,1500);

speed=random(55,90);
car4.velocityX=speed;
weight4=random(400,1500);



}



function draw() {
  background(255,255,255); 
  if(wall.x-car1.x < (car1.width+wall.width)/2){
car1.velocityX=0;
var deformation=0.5*weight1*speed*speed/22500;

if(deformation>180){
  car1.shapeColor=("red");
}


if(deformation<180 && deformation>100){
  car1.shapeColor=("yellow");
}


if(deformation<100){
  car1.shapeColor=("green");
}



  }

  if(wall.x-car2.x < (car2.width+wall.width)/2){
    car2.velocityX=0;
    var deformation=0.5*weight2*speed*speed/22500;
    
    if(deformation>180){
      car2.shapeColor=("red");
    }
    
    
    if(deformation<180 && deformation>100){
      car2.shapeColor=("yellow");
    }
    
    
    if(deformation<100){
      car2.shapeColor=("green");
    }

  }
    
    if(wall.x-car3.x < (car3.width+wall.width)/2){
      car3.velocityX=0;
      var deformation=0.5*weight3*speed*speed/22500;
      
      if(deformation>180){
        car3.shapeColor=("red");
      }
      
      
      if(deformation<180 && deformation>100){
        car3.shapeColor=("yellow");
      }
      
      
      if(deformation<100){
        car3.shapeColor=("green");
      }
      
      
      
        }


        if(wall.x-car4.x < (car4.width+wall.width)/2){
          car4.velocityX=0;
          var deformation=0.5*weight4*speed*speed/22500;
          
          if(deformation>180){
            car4.shapeColor=("red");
          }
          
          
          if(deformation<180 && deformation>100){
            car4.shapeColor=("yellow");
          }
          
          
          if(deformation<100){
            car4.shapeColor=("green");
          }
          
          
          
            }
  
    
      
  drawSprites();
}