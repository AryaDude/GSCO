var fixed;
var moving;
var wall1;
var wall2;
var wall3;
var wall4;

var car1;
var car2;
var car3;
var car4;

var speed;
var weight;

function setup() {
  createCanvas(windowWidth,windowHeight + 120);
  //moving = createSprite(200, 250, 50, 50);
  //fixed = createSprite(200,200,50,50)
  car1 = createSprite(200, 100, 50, 30);
  car2 = createSprite(200, 300, 50, 30);
  car3 = createSprite(200, 500, 50, 30);
  car4 = createSprite(200, 700, 50, 30);

  wall1 = createSprite(width - 100,100,50,90)
  wall2 = createSprite(width - 100,300,20,70)
  wall3 = createSprite(width - 100,500,20,70)
  wall4 = createSprite(width - 100,700,20,70)
  
  //moving.shapeColor = "green";
  //fixed.shapeColor = "green";

  car1.shapeColor = "white";
  car2.shapeColor = "green";
  car3.shapeColor = "green";
  car4.shapeColor = "green";

  //     wall1.debug = true;
  car1.debug = true;

  speed = random(35,100)
  weight = random(400,1500)
  
}

function draw() {0
  background(0); 

  

  car1.velocityX = speed;

  ddeformation()
  fill("white")
  text("Speed: " + Math.round(speed),200,50)
  text("Weight: " + Math.round(weight),300,50)
  drawSprites();
}

function ddeformation(){
  if(wall1.x - car1.x < (car1.width + wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509

    if(deformation>180){
      car1.shapeColor = "red";
    }

    if(deformation<180 && deformation>100){
      car1.shapeColor = "yellow";
    }

    if(deformation<100){
      car1.shapeColor = "green";
    }

    fill("white")
    text("Deformation report: " + deformation,500,50)

  }

}