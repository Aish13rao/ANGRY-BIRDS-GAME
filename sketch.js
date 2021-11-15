const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine , world;
var ground;
var ball, rope;
var box1, box2, box3, box4, box5, box6;

function setup(){
    createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,400,1000,30);

    box1 = new Box(400, 100,50,50);
    box2 = new Box(400, 100,50,50);
    box3 = new Box(400, 100,50,50);
    box4 = new Box(400, 100,50,50);
    box5 = new Box(400, 100,50,50);
    box6 = new Box(400, 100,50,50);


    ball = new Ball(200,200,50);

    rope = new Rope(ball.body,{x:200,y:20});
}

function draw(){
    background("cyan");

    Engine.update(engine);

    ground.display();
    ball.display();
    rope.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX, y: mouseY});
}