var car1,car2,car3,car4,wall1,wall2,wall3,wall4; 
var speed,weight; 
function setup() { 
  createCanvas(1600,400); 
  car1 = createSprite(50, 200, 50, 50); 
  car1.shapeColor ="white"; 
  wall1 = createSprite(760,200,50,150);
   wall1.shapeColor ="brown"; 
    car2 = createSprite(750,150,10,10); 
    car3 = createSprite(750,250,10,10); 
    car4 = createSprite(750,350,10,10);
    speed = random(55,90); 
    weight = random(400,1500)
     car1.velocityX = speed;
      car2.velocityX = speed;
      car3.velocityX = speed;
      car4.velocityX = speed;
     } 
     function draw() { 
       background("black"); 
       if(wall1.x - car1.x<car1.width/2+wall1.width/2){ 
      deformation = 0.5*weight*speed*speed/22500;
      if(deformation<100){ 
        car1.shapeColor ="green";
        car1.velocityX = 0;
      }
      if(deformation>100&&deformation<180){ 
        car1.shapeColor ="yellow"; 
        car1.velocityX = 0;
      }
       if(deformation>180){
          car1.shapeColor ="red"; 
          car1.velocityX = 0;
        } 
      } 
      drawSprites();
    }