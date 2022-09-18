var bgImg
var ss,ssImg
var alien,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10
var alienGrp,laserGrp
var laser 
var gameState="play"
var score=0

function preload() {
  bgImg=loadImage("./assets/bg5.jpg")
  ssImg=loadImage("./assets/ss1.png")
  a1=loadImage("./assets/a1.png")
  a2=loadImage("./assets/a2.png")
  a3=loadImage("./assets/a3.png")
  a4=loadImage("./assets/a4.png")
  a5=loadImage("./assets/a5.png")
  a6=loadImage("./assets/a6.png")
  a7=loadImage("./assets/a7.png")
  a8=loadImage("./assets/a8.png")
  a9=loadImage("./assets/a9.png")
  a10=loadImage("./assets/a10.png")

}

function setup() {
  canvas = createCanvas(1500,600);
  ss=createSprite(100,300)
  ss.addImage(ssImg)
  ss.scale=0.5
 
}

function draw() {
  background(bgImg);
if(gameState==="play"){
if(keyDown(UP_ARROW)){
  ss.y-=5
}
}

  drawSprites()
 
}

