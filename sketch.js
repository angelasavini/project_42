var iss, spacecraft,hasDocked;
var iss_img, spacecraft_img;
var bg

hasDocked = 0;


function preload(){

iss_img = loadImage('Images/iss.png');

spacecraft_img = loadAnimation('Images/spacecraft1.png','Images/spacecraft2.png','Images/spacecraft3.png','Images/spacecraft4.png');
//spacecraft_img= loadImage('Images/spacecraft1.png')

bg = loadImage('Images/spacebg.jpg') 
}

function setup() {
  createCanvas(800,400);
  
iss = createSprite(200,200,40,40);
iss.addImage(iss_img);

spacecraft = createSprite(400, 200, 50, 50);
spacecraft.addAnimation("still",spacecraft_img);

spacecraft.scale=0.2
  
}
function draw() {
  background(bg);  
  drawSprites();

  if(hasDocked ===1 ){
    fill("white")
    text("Docking Successful! ", 400,200);
    spacecraft_img= loadImage('Images/spacecraft1.png')
    
  }
else{
  spacecraft_img = loadAnimation('Images/spacecraft1.png','Images/spacecraft2.png','Images/spacecraft3.png','Images/spacecraft4.png');
  if(keyDown("down_arrow")){
  spacecraft.y=spacecraft.y+5;
}

if(keyDown("up_arrow")){
  spacecraft.y=spacecraft.y-5;
}

if(keyDown("left_arrow")){
  spacecraft.x=spacecraft.x-5;
}

if(keyDown("right_arrow")){
  spacecraft.x=spacecraft.x+5;
}

if(spacecraft.x===150 &&  spacecraft.y===250){
  hasDocked =1;
}
}
  
}



