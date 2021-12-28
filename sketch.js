var fondo;
var mario, marioImg;
var bomba,bombaImg,corazonImg,explocionImg;
var Corazon1,Corazon2,Corazon3,Corazon4;
var corazon=4;
var dona,donaImg;
var p1;
var marioGris;

function preload(){

fondo=loadImage("images/mapa.png");
marioImg=loadAnimation("images/mario2.png");
marioGris=loadAnimation("images/marioGris.png");
bombaImg=loadAnimation("images/bomba.png");
explocionImg=loadAnimation("images/explocion.png");
corazonImg=loadImage("images/corazon.png");
donaImg=loadImage("images/dona.png");
}
function setup(){
createCanvas(800,400);
  mario=createSprite(400,200,20,20);
  mario.addAnimation("mario",marioImg);
  mario.addAnimation("marioGris",marioGris);
  mario.scale=0.08;

  bomba=createSprite(500,100,20,20);
  bomba.addAnimation("bomba",bombaImg);
  bomba.addAnimation("explocion",explocionImg);
  bomba.scale=0.08;
  bomba.visible=false;
  bomba.lifetime=300;


  dona=createSprite(200,300,20,20);
  dona.addImage(donaImg);
  dona.scale=0.02;

  Corazon1=createSprite(400,16,20,20);
  Corazon1.addImage(corazonImg);
  Corazon1.scale=0.02;

  Corazon2=createSprite(375,16,20,20);
  Corazon2.addImage(corazonImg);
  Corazon2.scale=0.02;

  Corazon3=createSprite(350,16,20,20);
  Corazon3.addImage(corazonImg);
  Corazon3.scale=0.02;


  Corazon4=createSprite(325,16,20,20);
  Corazon4.addImage(corazonImg);
  Corazon4.scale=0.02;


  p1=new pared(100,50,20,10);
  //dona.visible=false;
}
function draw(){
  background(fondo);

p1.display();

  if(keyDown("space")){
    bomba.visible=true;
  }

  if(mario.isTouching(bomba)){
     bomba.changeAnimation("explocion",explocionImg);
     corazon=corazon-1;
     Corazon4.visible=false;
     mario.changeAnimation("marioGris",marioGris);
  }
  mover();
 drawSprites();
}
////////////////////////////////////////////////////////////////////
function mover(){
  if(keyDown(UP_ARROW)){
mario.y=mario.y-2;
  }

if(keyDown(DOWN_ARROW)){
  mario.y=mario.y+2;
}
if(keyDown(LEFT_ARROW)){
  mario.x=mario.x-2;

}
if(keyDown(RIGHT_ARROW)){
  mario.x=mario.x+2;
}


}
