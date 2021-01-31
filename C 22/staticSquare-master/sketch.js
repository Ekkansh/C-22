//nicknaming / name spacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, myWorld;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);

    
    
    //to create our programme's engine
    engine = Engine.create();
    myWorld = engine.world;

    //while creating a body if we want to change a property we can create a var and use that as the last parameter
    var ground_options ={
        isStatic: true
    }

    //to create the body of the ground to span across the canvas
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    //always add the body to the World immedietly so that it behave like a real world body
    World.add(myWorld,ground);
    
    var ballOp={
        restitution:1
    }
    ball=Bodies.circle(200,200,25,ballOp);
    World.add(myWorld,ball);

    console.log(ground);
}

function draw(){
    background(0);
    //always update the Engine with our program's engine
    Engine.update(engine);
    rectMode(CENTER);
    //to display the body
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y,25);
}