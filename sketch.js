
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	fairyIMG=loadImage("images/fairy2.png")
  starIMG=loadImage("images/star.png")
  background1 = loadImage("images/starnight.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	star=createSprite(width/2, 80, 10,10);
  star.addImage(starIMG)
  star.scale = 0.3


	fairy1=createSprite(width/2, 500, 10,10);
  fairy1.addImage(fairyIMG)
  fairy1.scale = 0.2
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, starBody);
	Engine.run(engine);


	//Create a Ground
	/*ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);*/
  
}


function draw() {
 
  background(background1);
 
 star.x= starBody.position.x 
star.y= starBody.position.y 

  
  drawSprites();
  
  
 
}
function keyPressed(){
if(keyCode === LEFT_ARROW){
	fairy1.x = fairy1.x -20;
    translation={x:-20,y:0}
    Matter.Body.translate(starBody, translation);

}
else if(keyCode === RIGHT_ARROW){
	fairy1.x = fairy1.x +20;
    translation={x:20,y:0}
    Matter.Body.translate(starBody, translation);
}
else if(keyCode === DOWN_ARROW){
	Matter.Body.setStatic(starBody, false);
}

}
