var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var o1,o2,o3,o4,o5,o6
var cloud, cloudsGroup, cloudImage;
var score=0


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
o1=loadImage("obstacle1.png")
o2=loadImage("obstacle2.png")
o3=loadImage("obstacle3.png")
o4=loadImage("obstacle4.png")
o5=loadImage("obstacle5.png")
o6=loadImage("obstacle6.png")
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
text("Score "+score,500,50)
 score=score+Math.round(frameCount/60)
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnobsticals()
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnobsticals() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    ob = createSprite(600,160,40,10);
   var rand=Math.round(random(1,6))
  switch(rand){
    case 1:ob.addImage(o1);break;
    case 2:ob.addImage(o2);break;
    case 3:ob.addImage(o3);break;
    case 4:ob.addImage(o4);break;
    case 5:ob.addImage(o5);break;
    case 6:ob.addImage(o6);break;
  }
    ob.scale = 0.5;
    ob.velocityX = -6;
    
    
    //assigning lifetime to the variable
    ob.lifetime = 300
    
    //adjust the depth
   
    }
}
