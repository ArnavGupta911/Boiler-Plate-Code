// Algorithm for isTouching!

var fixedRect, movingRect;
var g1,g2,g3;

function setup() {
createCanvas(800, 400);
fixedRect = createSprite(200, 200, 50, 80);
movingRect = createSprite(400, 200, 80, 30);
g1 = createSprite(200,100,50,50);
g2 = createSprite(300,100,50,50);
g3 = createSprite(400,100,50,50);

g1.shapeColor = "Orange";
g2.shapeColor = "Yellow";
g3.shapeColor = "Green";

movingRect.shapeColor = "blue";
fixedRect.shapeColor = "blue";
}

function draw() {
background(0);
movingRect.x = mouseX;
movingRect.y = mouseY;

//console.log(movingRect.x - fixedRect.x); 

if(isTouching(movingRect,g2)){
movingRect.shapeColor = "red";
g2.shapeColor = "red";
}
else {
movingRect.shapeColor = "blue";
g2.shapeColor = "white";
}

drawSprites();

}