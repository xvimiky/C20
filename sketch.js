var fixedRect, movingRect;

function setup() {
  createCanvas(400,400);

  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "purple";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

}

function draw() {
  background("green");  

  movingRect.x = mouseX;  
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect.x);
  console.log(movingRect.width/2 + fixedRect.width/2);

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
      fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
      movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
      fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2) {
    
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "red";

  } else {
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "red";
  }


  drawSprites();
  
}