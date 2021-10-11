var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  //bg = loadImage("aladdin_cave.jpg");
  bg = loadImage("leo.jpg");
  bg2 = loadImage("bP2Zop.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear();
    background(bg2)
    stroke("white")
    fill("bLUE")
    textSize(60);
    text("TREASURE UNLOCKED !! ",200, 200);
    stroke("white")
    textSize(60);
    text("Made by Shivani",250, 310);
    stroke("white")
    textSize(60);
    text("Hope u enjoyed :)",250, 400);
  }

  drawSprites()
}