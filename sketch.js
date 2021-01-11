var canvas;
var music;
var box1,box2,box3,box4;
var movingbox,edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){    
canvas = createCanvas(800,600);
box1 = createSprite(790,100,30,80);
box1.shapeColor = "green";
box2 = createSprite(790,200,30,80);
box2.shapeColor = "blue";
box3 = createSprite(790,300,30,80);
box3.shapeColor = "yellow";
box4 = createSprite(790,400,30,80);
box4.shapeColor = "red";
movingbox = createSprite( random(20,750),300,50,50);
movingbox.shapeColor = "purple";
movingbox.velocityX = 4;
movingbox.velocityY = 9;


box1.width/2 + movingbox.width/2;
movingbox.x - box1.x ;

}

function draw() {
    background(0,0,0);

movingbox.y = World.mouseY;
movingbox.x = World.mouseX;

edges=createEdgeSprites();
movingbox.bounceOff(edges);
 

if (movingbox.isTouching(box1)&& box1.bounceOff(movingbox)){

    movingbox.shapeColor = "green";
    box1.shapeColor = "green";
    movingbox.velocityX = 0;
    box1.velocityX = 0;
    movingbox.velocityY = 0;
    box1.velocityY = 0;
    music.play();

}

if(box2.isTouching(movingbox)){
    movingbox.shapeColor = rgb(255,128,0);
    movingbox.velocityX = 0;
    movingbox.velocityY = 0;
    music.stop();
}

if(box3.isTouching(movingbox) &&movingbox.bounceOff(box3)){
    movingbox.shapeColor = rgb(153,0,76);
}

if(box4.isTouching(movingbox) && movingbox.bounceOff(box4)){
    movingbox.shapeColor = rgb(0,100,0);
}


    drawSprites();
}


