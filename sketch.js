const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg ;
var bg1;
function preload() {  
bg1 = loadImage("sprites/bg.png");
pipe2 = loadImage("sprites/pipe2.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    bg = createSprite(600,200);
    bg.velocityX = -5;
    bg.addImage(bg1);


    pipe = createSprite(200,200);
    pipe.addImage(pipe2);
}

function draw(){
   
        background(0);
        drawSprites();

        if(bg.x < 0 ){
            bg.x = 600
        }

    Engine.update(engine);
   
    
}



