var tower,towerimage;
var door,doorimage,doorsgroup;
var climber,climberimage,climbersgroup;
var ghost,ghostimg;
var invisibleblocksgroup,invisibleblock;
var gameState="play";
var ghostsound;

function preload(){
  towerimage=loadImage("tower.png");
  doorimage=loadImage("door.png");
  climberimage=loadImage("climber.png");
  ghostimg=loadImage("ghost-standing.png");
  ghostsound=loadSound("spooky.wav");
  doorsgroup=new Group();
  climbersgroup=new Group();
  invisibleblocksgroup=new Group();
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(250,300,50,50);
  tower.addImage("tower",towerimage);
  tower.velocityY=1;
  
  ghost=createSprite(300,300,50,50);
  ghost.addImage("ghost",ghostimg);
  ghost.scale=0.2;
 ghostsound.loop();
}

function draw (){
  background(0);
   if(gameState==="play"){ 
  if(tower.y >300){
    tower.y=200;
     }
  spawndoor();
  if(keyDown("space")){
    ghost.velocityY=-5
  }
 ghost.velocityY=ghost.velocityY+0.2;
 
  if(keyDown("right_Arrow")){
     ghost.x=ghost.x+2;
     }  
  if(keyDown("left_Arrow")){
     ghost.x=ghost.x-2;
     } 
  
 if(ghost.isTouching(climbersgroup)) {
   ghost.velocityY=0;
 }
 if(ghost.isTouching(invisibleblocksgroup)) {
   ghost.destroy();
   gameState="end";
 }  
  drawSprites();
  }
  if(gameState==="end"){
    fill("green");
    stroke("blue");
    textSize(50);
    text("Game Over",200,300);
  }
  
}
function spawndoor(){
  if(frameCount%240===0){
   door= createSprite(200,-60,20,20);
  door.addImage(doorimage);
    door.x=Math.round(random(120,400));
   door.velocityY=1; 
    doorsgroup.add(door);
    door.lifetime=600;
    climber=createSprite(200,10,20,20) 
  climber.addImage(climberimage);
  climber.velocityY=1;
    climber.x=door.x
    climbersgroup.add(climber);
    climber.lifetime=600;
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
 invisibleblock=createSprite(200,15,0,5);
    invisibleblock.width=climber.width;
    invisibleblock.x=door.x;
    invisibleblock.velocityY=1;
invisibleblocksgroup.add(invisibleblock);
    
  }
}
