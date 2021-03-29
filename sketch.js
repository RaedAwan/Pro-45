const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var runningMan, leftRunningMan;
var titleImg, playImg, title, play;
var man;
var bg, ground, invisWall;
var gamestate, argument, score, count, winScreen, next, grav;
	var lvl0 = 1;
	var lvl1 = 6;
	var END = 2;
	var END2 = 7;
	
	var WIN = 3;
	var HOME = 4;
	var MENU = 5

	var TRUE = 1;
	var FALSE = 2;

var manDed, manStand, dethScreen, reviveButton, homeButton, groundImg;
var spikeUSeless;

var coinImg, coinCount, coin,wall, bouncer, stair, stairImg, homeButtonImg, winScreen, nextImg;

var spikesGroup;



// var camera1;

function preload(){
	//runningMan = loadAnimation("Image/Image.001.png","Image/Image.002.png","Image/Image.003.png","Image/Image.004.png","Image/Image.005.png","Image/Image.005.png","Image/Image.006.png","Image/Image.007.png","Image/Image.008.png","Image/Image.009.png","Image/Image.010.png","Image/Image.011.png");
	runningMan = loadAnimation("run/NewRunCycle0.png","run/NewRunCycle1.png","run/NewRunCycle2.png","run/NewRunCycle3.png","run/NewRunCycle4.png","run/NewRunCycle5.png","run/NewRunCycle6.png","run/NewRunCycle7.png","run/NewRunCycle8.png","run/NewRunCycle9.png",);
	leftRunningMan = loadAnimation("leftrun/left1.png","leftrun/left2.png","leftrun/left3.png","leftrun/left4.png","leftrun/left5.png","leftrun/left6.png","leftrun/left7.png","leftrun/left8.png","leftrun/left9.png","leftrun/left10.png",);
	bg = loadImage("longbg2.png");
	manDed = loadAnimation("dedMan.png");
	manStand = loadAnimation("manStand.png");
	spikes = loadImage("spikes.png");
	dethScreen = loadImage("dedScreen.png");
	reviveButton = loadImage("restartImg.png");
	groundImg = loadImage("ground1.png");
	stairImg = loadImage("stairs.png");
	stair1Img = loadImage("stairs1.png");
	winScreenImg = loadImage("winScreen.png");
	nextImg = loadImage("winButton.png");
	titleImg = loadImage("title.png");
	playImg = loadImage("playButton.png");
	coinImg = loadImage("Coin.png");
	birdsImage = loadImage("birds.png");

	// ------------------------------------Main Menu-------------------------------
	
	lvlSlctIMG = loadImage("levelBg.png");
	lvl0BtnIMG = loadImage("lvl0button.png");
	lvl1BtnIMG = loadImage("lvlButton.png");

	//-----------------------------------Title Screen----------------------------------

	homeButtonImg = loadImage("homeButton.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	frameRate(46);

	argument2 = 1;

	grav = TRUE;

	colour = color(79,192,49);

	argument = TRUE;

	score = 0;
	count = 0;

	gamestate = HOME;

	backGround = createSprite(displayWidth, displayHeight/2, 3800, displayHeight);
	backGround.addImage(bg);
	//backGround.velocityX = -3;

	homeButton = createSprite(1409, 102, 200, 200);
	homeButton.setCollider("rectangle", -30, 0, 400, 500);
	homeButton.scale = 0.2;
	homeButton.addImage(homeButtonImg);
	homeButton.debug = true;

	dedScreen = createSprite(displayWidth/2, displayHeight/2 - 100, 500, 500);
	dedScreen.addImage(dethScreen);
	dedScreen.scale = 0.5;
	dedScreen.visible = false;

	man = createSprite(138, 600, 200, 200);
	man.debug = true;
	man.setCollider("rectangle", 0, 0, 100, 190);
	man.addAnimation("stand", manStand);
	man.addAnimation("run", runningMan);
	man.addAnimation("leftrun", leftRunningMan);
	man.addAnimation("ded", manDed);
	man.scale = 0.5;
	man.visible = false;

	ground = createSprite(589, 1000,displayWidth,500);
	ground.debug = true;
	//ground.addImage(groundImg);
	ground.x = ground.width /2;
	ground.shapeColor = colour;

	lvlSlctBg = createSprite(displayWidth/2, displayHeight/2);
	lvlSlctBg.addImage(lvlSlctIMG);
	lvlSlctBg.scale = 0.8;
	lvlSlctBg.visible = false;

	lvl0Btn = createSprite(displayWidth/2, displayHeight/2);
	lvl0Btn.addImage(lvl0BtnIMG);
	lvl0Btn.scale = 0.8;
	lvl0Btn.visible = false;
	lvl0Btn.debug = true;
	lvl0Btn.setCollider("rectangle", 25, -130, 1050, 180, 0);

	lvl1Btn = createSprite(displayWidth/2, displayHeight/2 + 10);
	lvl1Btn.addImage(lvl1BtnIMG);
	lvl1Btn.scale = 0.8;
	lvl1Btn.debug = true;
	lvl1Btn.setCollider("rectangle", 25, 70, 1050, 180, 0);

	// invisWall = createSprite(16, 735, 50, displayHeight);
	// invisWall.visible = false;

//--------------------------------------TUTORIAL LEVEL--------------------------------------------

	restart = createSprite(displayWidth/2, displayHeight/2+200, 200, 200);
	restart.addImage(reviveButton);
	restart.scale = 0.3;
	restart.visible = false;

	stair1 = createSprite(407, 693);
	stair1.addImage(stairImg);
	stair1.setCollider("rectangle", 0, 50, 100, 300, 45);
	stair1.scale = 0.6;
	stair1.debug = true;
	stair1.visible = false;

	stair2 = createSprite(407, 453);
	stair2.addImage(stair1Img);
	stair2.setCollider("rectangle", -10, 10, 50, 230, -45);
	stair2.scale = 0.6;
	stair2.debug = true;
	stair2.visible = false;

	stair3 = createSprite(68, 378);
	stair3.addImage(stair1Img);
	stair3.setCollider("rectangle", -10, 10, 50, 230, -45);
	stair3.scale = 0.6;
	stair3.debug = true;
	stair3.visible = false;

	wall1 = createSprite(515, 650, 130, 20);
	wall1.shapeColor = "black";
	wall1.visible = false;

	wall2 = createSprite(586, 595, 20, 130);
	wall2.shapeColor = "black";
	wall2.visible = false;

	wall3 = createSprite(586, 465, 20, 130);
	wall3.shapeColor = "black";
	wall3.visible = false;

	wall4 = createSprite(320, 412, 90, 20);
	wall4.shapeColor = "black";
	wall4.visible = false;

	wall5 = createSprite(160, 223, 50, 20);
	wall5.shapeColor = "black";
	wall5.visible = false;

	wall6 = createSprite(0, 333, 50, 20);
	wall6.shapeColor = "black";
	wall6.visible = false;

	wall7 = createSprite(430, 223, 330, 20);
	wall7.shapeColor = "black";
	wall7.visible = false;

	wall8 = createSprite(586, 315, 20, 200);
	wall8.shapeColor = "black";
	wall8.visible = false;

	bouncer1 = createSprite(200, 522, 90, 20);
	bouncer1.shapeColor = "yellow";
	bouncer1.visible = false;

	bouncer2 = createSprite(700, 522, 90, 20);
	bouncer2.shapeColor = "yellow";
	bouncer2.visible = false;

	//Use these walls just incase (For Atharva, teacher pls ignore)

	wall10 = createSprite(960, 377, 330, 20);
	wall10.shapeColor = "blue";
	wall10.visible = false;

	// wall11 = createSprite(320, 412, 90, 20);
	// wall11.shapeColor = "black";

	spike1 = createSprite(604, 731, 100, 100);
	spike1.addImage(spikes);
	spike1.scale = 0.4;
	spike1.debug = true;
	spike1.setCollider("rectangle" , 10, 5, 250, 300);
	spike1.visible = false;

	spike2 = createSprite(704, 731, 100, 100);
	spike2.addImage(spikes);
	spike2.scale = 0.4;
	spike2.debug = true;
	spike2.setCollider("rectangle" , 10, 5, 250, 300);
	spike2.visible = false;

	spike3 = createSprite(804, 731, 100, 100);
	spike3.addImage(spikes);
	spike3.scale = 0.4;
	spike3.debug = true;
	spike3.setCollider("rectangle" , 10, 5, 250, 300);
	spike3.visible = false;

	spike4 = createSprite(904, 731, 100, 100);
	spike4.addImage(spikes);
	spike4.scale = 0.4;
	spike4.debug = true;
	spike4.setCollider("rectangle" , 10, 5, 250, 300);
	spike4.visible = false;

	spike5 = createSprite(1004, 731, 100, 100);
	spike5.addImage(spikes);
	spike5.scale = 0.4;
	spike5.debug = true;
	spike5.setCollider("rectangle" , 10, 5, 250, 300);
	spike5.visible = false;

	spike6 = createSprite(1104, 731, 100, 100);
	spike6.addImage(spikes);
	spike6.scale = 0.4;
	spike6.debug = true;
	spike6.setCollider("rectangle" , 10, 5, 250, 300);
	spike6.visible = false;

	spike7 = createSprite(1204, 731, 100, 100);
	spike7.addImage(spikes);
	spike7.scale = 0.4;
	spike7.debug = true;
	spike7.setCollider("rectangle" , 10, 5, 250, 300);
	spike7.visible = false;

	spike8 = createSprite(1304, 731, 100, 100);
	spike8.addImage(spikes);
	spike8.scale = 0.4;
	spike8.debug = true;
	spike8.setCollider("rectangle" , 10, 5, 250, 300);
	spike8.visible = false;

	coin3 = createSprite(158, 166, 20, 20);
	coin3.addImage(coinImg);
	coin3.scale = 0.06;
	coin3.debug = true;
	coin3.setCollider("rectangle", 0, 0, 100, 100);
	coin3.visible = false;

	coin2 = createSprite(317, 364, 20, 20);
	coin2.addImage(coinImg);
	coin2.scale = 0.06;
	coin2.debug = true;
	coin2.setCollider("rectangle", 0, 0, 100, 100);
	coin2.visible = false;

	coin1 = createSprite(516, 597, 20, 20);
	coin1.addImage(coinImg);
	coin1.scale = 0.06
	coin1.debug = true;
	coin1.setCollider("rectangle", 0, 0, 100, 100);
	coin1.visible = false;
	
//-----------------------------------------------LEVEL 1------------------------------------------------



//----------------------------------------------GENERIC SPRITES---------------------------------------------

	winScreen = createSprite(displayWidth/2, displayHeight/2 - 100, 500, 500);
	winScreen.addImage(winScreenImg);
	winScreen.scale = 0.5;
	winScreen.visible = false;

	next = createSprite(displayWidth/2, displayHeight/2+200, 200, 200);
	next.addImage(nextImg);
	next.scale = 0.3;
	next.visible = false;

	title = createSprite(displayWidth/2, displayHeight/2 - 100, 500, 500);
	title.addImage(titleImg);
	title.scale = 0.4;
	title.visible = true;

	play = createSprite(displayWidth/2 + 100, displayHeight/2+200, 200, 200);
	play.addImage(playImg);
	play.scale = 0.2;
	play.visible = true;

	engine = Engine.create();
	world = engine.world;

	spikesGroup = new Group();
	birdsGroup = new Group();

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(255);
	findMousePos();

	if(mousePressedOver(homeButton)){
		gamestate = HOME;
	}

	// console.log(gamestate);

	man.collide(stair1, ()=>{
		man.velocityX = 1;
		man.velocityY = 1;
		if(keyWentDown(32)){
			man.velocityY = -13;
		}
	});

	man.collide(stair2, ()=>{
		man.velocityX = 1;
		man.velocityY = 1;
		if(keyWentDown(32)){
			man.velocityY = -13;
		}
	});

	man.collide(stair3, ()=>{
		man.velocityX = 1;
		man.velocityY = 1;
		if(keyWentDown(32)){
			man.velocityY = -13;
		}
	});

	man.collide(stair1);

	man.collide(ground);

	man.collide(wall10, ()=>{
		grav = FALSE;
		gamestate = WIN;
	});

	if(gamestate === HOME){
		count = 0;
		score = 0;
		argument2 = 1;

		birdsGroup.destroyEach();
		spikesGroup.destroyEach();

		man.visible = false;

		lvlSlctBg.visible = false;
		lvl0Btn.visible = false;
		lvl1Btn.visible = false;

		wall1.visible = false;
		wall2.visible = false;
		wall3.visible = false;
		wall4.visible = false;
		wall5.visible = false;
		wall6.visible = false;
		wall7.visible = false;
		wall8.visible = false;
		wall10.visible = false;

		bouncer1.visible = false;
		bouncer2.visible = false;

		stair1.visible = false;
		stair2.visible = false;
		stair3.visible = false;

		spike1.visible = false;
		spike2.visible = false;
		spike3.visible = false;
		spike4.visible = false;
		spike5.visible = false;
		spike6.visible = false;
		spike7.visible = false;
		spike8.visible = false;

		coin1.remove();
		coin2.remove();
		coin3.remove();

		title.visible = true;
		play.visible = true;

		if(mousePressedOver(play)){
			gamestate = MENU;
		}
	}

	if(gamestate === MENU){
		count = 0;
		score = 0;

		man.visible = false;

		wall1.visible = false;
		wall2.visible = false;
		wall3.visible = false;
		wall4.visible = false;
		wall5.visible = false;
		wall6.visible = false;
		wall7.visible = false;
		wall8.visible = false;
		wall10.visible = false;

		bouncer1.visible = false;
		bouncer2.visible = false;

		stair1.visible = false;
		stair2.visible = false;
		stair3.visible = false;

		spike1.visible = false;
		spike2.visible = false;
		spike3.visible = false;
		spike4.visible = false;
		spike5.visible = false;
		spike6.visible = false;
		spike7.visible = false;
		spike8.visible = false;

		title.visible = false;
		play.visible = false;

		lvlSlctBg.visible = true;
		lvl0Btn.visible = true;
		lvl1Btn.visible = true;

		if(mousePressedOver(lvl0Btn)){
			gamestate = lvl0;
		}

		if(mousePressedOver(lvl1Btn)){
			gamestate = lvl1;
		}
	}

	if(gamestate === lvl0){

		if(argument2 === 1){

			coin3 = createSprite(158, 166, 20, 20);
			coin3.addImage(coinImg);
			coin3.scale = 0.06;
			coin3.debug = true;
			coin3.setCollider("rectangle", 0, 0, 100, 100);
			coin3.visible = false;
		
			coin2 = createSprite(317, 364, 20, 20);
			coin2.addImage(coinImg);
			coin2.scale = 0.06;
			coin2.debug = true;
			coin2.setCollider("rectangle", 0, 0, 100, 100);
			coin2.visible = false;
		
			coin1 = createSprite(516, 597, 20, 20);
			coin1.addImage(coinImg);
			coin1.scale = 0.06
			coin1.debug = true;
			coin1.setCollider("rectangle", 0, 0, 100, 100);
			coin1.visible = false;

			argument2 = 0;
		}

		man.velocityX = 0;

		title.visible = false;
		play.visible = false;

		lvlSlctBg.visible = false;
		lvl0Btn.visible = false;
		lvl1Btn.visible = false;

		if(argument === TRUE){
			if(frameCount%3 === 0){
			  count = (count + 1);
			}
		}else if(argument === FALSE){
			count = count;
		}

		// if(argument === TRUE){
		// 	if(frameCount%60 === 0){
		// 	  score = (score + 1);
		// 	}
		// }else if(argument === FALSE){
		// 	score = score;
		// }

		man.visible = true;

		coin1.visible = true;
		coin2.visible = true;
		coin3.visible = true;

		man.collide(coin1, ()=>{
			coin1.remove();
			upScore();
		});
		man.collide(coin2, ()=>{
			coin2.remove();
			upScore();
		});
		man.collide(coin3, ()=>{
			coin3.remove();
			upScore();
		});

		wall1.visible = true;
		wall2.visible = true;
		wall3.visible = true;
		wall4.visible = true;
		wall5.visible = true;
		wall6.visible = true;
		wall7.visible = true;
		wall8.visible = true;
		wall10.visible = true;

		bouncer1.visible = true;
		bouncer2.visible = true;

		stair1.visible = true;
		stair2.visible = true;
		stair3.visible = true;

		spike1.visible = true;
		spike2.visible = true;
		spike3.visible = true;
		spike4.visible = true;
		spike5.visible = true;
		spike6.visible = true;
		spike7.visible = true;
		spike8.visible = true;

		if(man.y>700){
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		}

		man.collide(ground, jumpOnGround);

		man.collide(wall1, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall2, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall3, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall4, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall5, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall6, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall7, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		man.collide(wall8, ()=>{
			if(keyWentDown(32)){
				man.velocityY = -13;
			}
		});

		// man.collide(wall10, ()=>{
		// 	if(keyWentDown(32)){				// Important
		// 		man.velocityY = -13;
		// 	}
		// });

		// wall10.collide(man, ()=>{
		// 	if(keyWentDown(32)){				// Important
		// 		man.velocityY = -13;
		// 	}
		// });

		bouncer1.displace(man, ()=>{
			man.velocityY = -15;
		});

		bouncer2.displace(man, ()=>{
			man.velocityY = -20;
		});

		if(keyDown("A")){
			man.x = man.x - 6;
			man.changeAnimation("leftrun", leftRunningMan);
		}else if(keyDown("D")){
			man.x = man.x + 6;
			man.changeAnimation("run", runningMan)
		}else{
			man.changeAnimation("stand", manStand);
		}

		man.collide(spike1, ()=>{
			gamestate = END;
		});

		man.collide(spike2, ()=>{
			gamestate = END;
		});

		man.collide(spike3, ()=>{
			gamestate = END;
		});

		man.collide(spike4, ()=>{
			gamestate = END;
		});

		man.collide(spike5, ()=>{
			gamestate = END;
		});

		man.collide(spike6, ()=>{
			gamestate = END;
		});

		man.collide(spike7, ()=>{
			gamestate = END;
		});

		man.collide(spike8, ()=>{
			gamestate = END;
		});

		if(grav = TRUE){
			man.velocityY = man.velocityY + 0.8;
		}else{
			man.velocityY = 0;
		}
	}

	if(gamestate === lvl1){

		man.velocityX = 0;

		spawnSpikes();
		spawnBirds();

		title.visible = false;
		play.visible = false;

		lvlSlctBg.visible = false;
		lvl0Btn.visible = false;
		lvl1Btn.visible = false;

		if(spikesGroup.isTouching(man)){
			gamestate = END2;
		}

		if(argument === TRUE){
			if(frameCount%3 === 0){
			  count = (count + 1);
			}
		}else if(argument === FALSE){
			count = count;
		}

		man.visible = true;

		if(man.y>700){
			if(keyWentDown(32)){
				man.velocityY = -17;
			}
		}

		if(grav = TRUE){
			man.velocityY = man.velocityY + 0.8;
		}else{
			man.velocityY = 0;
		}

		man.changeAnimation("run", runningMan)

		man.collide(ground, jumpOnGround);

		lvlSlctBg.visible = false;
		lvl0Btn.visible = false;
		lvl1Btn.visible = false;

		wall1.visible = false;
		wall2.visible = false;
		wall3.visible = false;
		wall4.visible = false;
		wall5.visible = false;
		wall6.visible = false;
		wall7.visible = false;
		wall8.visible = false;
		wall10.visible = false;

		bouncer1.visible = false;
		bouncer2.visible = false;

		stair1.visible = false;
		stair2.visible = false;
		stair3.visible = false;

		spike1.visible = false;
		spike2.visible = false;
		spike3.visible = false;
		spike4.visible = false;
		spike5.visible = false;
		spike6.visible = false;
		spike7.visible = false;
		spike8.visible = false;
	}

	if (gamestate === END){
		count = 0;
		score = 0;
		man.changeAnimation("ded", manDed);
		dedScreen.visible = true;
		restart.visible = true;
		ground.velocityX = 0;
		man.velocityY = 0;
		man.velocityX = 0;
		if(mousePressedOver(restart)){
			reset1();
		}
	}

	if (gamestate === END2){
		count = 0;
		score = 0;
		man.changeAnimation("ded", manDed);
		dedScreen.visible = true;
		restart.visible = true;
		ground.velocityX = 0;

		birdsGroup.setVelocityXEach(0);
		spikesGroup.setVelocityXEach(0);

		birdsGroup.setLifetimeEach(-1);
		spikesGroup.setLifetimeEach(-1);

		man.velocityY = 0;
		man.velocityX = 0;
		if(mousePressedOver(restart)){
			reset();
		}
	}

	if(gamestate === WIN){
		count = 0;
		score = score;
		man.changeAnimation("stand", manStand);
		man.velocityY = 0;
		man.velocityX = 0;
		winScreen.visible = true;
		next.visible = true;
		grav = FALSE;
		if(mousePressedOver(restart)){
			reset1();
		}
	}
	drawSprites();

	stroke("black");
	strokeWeight(4);
	fill("white");
	textSize(40);
	text("Score: "+score, 100, 100);
}

function findMousePos(){
	var argument1;
	argument1 = 1;
	if(keyWentDown(32) && argument1 === 1){
		print("{"+"x: "+ mouseX + ", y: "+ mouseY+"}");
		print(mouseX + ", "+ mouseY);
		argument1 = 0;
		argument1 = 1;
	}
}

function spawnSpikes(){
	if(frameCount%120===0){
		var spike = createSprite(displayWidth + 30, displayHeight-140, 100, 100);
		spike.addImage(spikes);
		spike.scale = 0.4;
		spike.debug = true;
		spike.setCollider("rectangle" , 5, 5, 320, 130);
		spike.velocityX = -(6 + 3*count/100);
		spikesGroup.add(spike);
	}
}

function spawnBirds() {
	if (frameCount % 60 === 0) {
	  var birds = createSprite(displayWidth + 30, 0, 100, 100);
	  birds.y = Math.round(random(200,340));
	  birds.addImage(birdsImage);
	  birds.scale = 0.5;
	  birds.velocityX = -3;
	  
	  birds.lifetime = 800;
	  
	  birdsGroup.add(birds);
	}
  }

function reset1(){
	gamestate = lvl0;
	dedScreen.visible = false;
	restart.visible = false;
	winScreen.visible = false;
	next.visible = false;
	man.x = 138;
	man.y = 600;
	man.changeAnimation("run", runningMan);
	score = 0;
	grav = TRUE;



	coin3 = createSprite(158, 166, 20, 20);
	coin3.addImage(coinImg);
	coin3.scale = 0.06;
	coin3.debug = true;
	coin3.setCollider("rectangle", 0, 0, 100, 100);
	coin3.visible = false;

	coin2 = createSprite(317, 364, 20, 20);
	coin2.addImage(coinImg);
	coin2.scale = 0.06;
	coin2.debug = true;
	coin2.setCollider("rectangle", 0, 0, 100, 100);
	coin2.visible = false;

	coin1 = createSprite(516, 597, 20, 20);
	coin1.addImage(coinImg);
	coin1.scale = 0.06
	coin1.debug = true;
	coin1.setCollider("rectangle", 0, 0, 100, 100);
	coin1.visible = false;
}

function reset(){
	gamestate = lvl1;
	dedScreen.visible = false;
	restart.visible = false;
	winScreen.visible = false;
	next.visible = false;
	man.x = 138;
	man.y = 600;
	man.changeAnimation("run", runningMan);
	score = 0;
	grav = TRUE;

	birdsGroup.destroyEach();
	spikesGroup.destroyEach();
}

function jumpOnGround(){
	if(keyCode === 32){
		man.velocityY = -13;
	}
}

function upScore(){
	score = score + 5;
}