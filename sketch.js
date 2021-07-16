const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var ground, brick1, brick2;

function setup(){
    canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options = {
        isStatic: true
    }
    ground = Bodies.rectangle(300, 590, 600, 20, ground_options);
    Composite.add(world, ground);

    brick1 = new Brick(200, 200, 120, 60);
    brick2 = new Brick(240, 150, 60, 120);

    angleMode(RADIANS);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill("green");
    rect(ground.position.x, ground.position.y, 600, 20);
    brick1.display();
    brick2.display();
}
