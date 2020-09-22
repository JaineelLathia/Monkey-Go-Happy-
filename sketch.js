var monkey, ground, banana, obstacle, score;
var monkeyimage, bananaimage, obstacleimage, backimage, backgr;

function preload() {
  monkeyimage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  backimage = loadImage("jungle.jpg");
  
  bananaimage = loadImage("banana.png");
  
  obstacleimage = loadImage("stone.png");
}

function setup() {
  createCanvas(400, 400);
  
  backgr = createSprite(0,0,800,400);
  
  backgr.addImage(backimage);
  backgr.x = backgr.width /2;
  backgr.velocityX = -2;
  
  monkey = createSprite(100,340,20,50);
  monkey.addAnimation("Running",monkeyimage);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  
  ground.visible = false;
  
  banana = new Group();
  
  obstacle = new Group();
  
  score = 0;
  
}

function draw() {
  background(225);
  
  monkey.collide(ground);
  
    if(backgr.x<100){ backgr.x=backgr.width/2; }
  
  if(keyDown("space") && monkey.y >= 310){
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  
  if(monkey.isTouching(banana)) {
   score = score + 2;
  
   banana.destroyEach();
   }
  
  switch(score) {
    case 10 : monkey.scale = 0.12;
      break;
    case 20 : monkey.scale = 0.14;
      break;
    case 30 : monkey.scale = 0.16;
      break;
    case 40 : monkey.scale = 0.18;
      break;
    case 50 : monkey.scale = 0.2;
      break;
    case 60 : monkey.scale = 0.22;
      break;
    case 70 : monkey.scale = 0.24;
      break;
    case 80 : monkey.scale = 0.26;
      break;
    case 90 : monkey.scale = 0.28;
      break;
    case 100 : monkey.scale = 0.3;
      break;
   }
  
  if(monkey.isTouching(obstacle) && monkey.scale > 0.1) {
     monkey.scale = 0.1;
    score = 0;
  }
  
  food();
  obstacles();
  
  drawSprites();
  
  stroke("black");
  fill("black");
  textSize(40);
  text("Score " + score,30,50);
  
}

function food() {
  if(frameCount % 70 === 0) {
    var bananafood = createSprite(600,250,40,10);
    banana.add(bananafood);
    bananafood.y = random(120,200);
    bananafood.addImage(bananaimage);
    bananafood.velocityX = -5;
    bananafood.lifetime = 300;
    bananafood.scale = 0.05;
  }
}

function obstacles() {
  if(frameCount % 100 === 0) {
    var stone = createSprite(400,350,20,20);
    obstacle.add(stone);
    stone.collide(ground);
    stone.x = random(200,380);
    stone.addImage(obstacleimage);
    stone.velocityX = -5;
    stone.lifetime = 80;
    stone.scale = 0.2;
  }
}
