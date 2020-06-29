
var  block, movingblock;
function setup() {
  createCanvas(800,400);
  block=createSprite(400, 200, 50, 50);
  movingblock=createSprite(0,0,50,50);
  
}

function draw() {
  background(255,255,255);  
  
  movingblock.y = mouseY;
  movingblock.x = mouseX;
  block.shapeColor = "blue";
  movingblock.shapeColor = "blue";
  if(block.x-movingblock.x<block.width/2+movingblock.width/2
    &&movingblock.x-block.x<movingblock.width/2+block.width/2
    &&block.y-movingblock.y<block.height/2+movingblock.height/2
    &&movingblock.y-block.y<movingblock.height/2+block.height/2){
    block.shapeColor = "yellow";
    movingblock.shapeColor = "yellow";
  }
  
  drawSprites();
}