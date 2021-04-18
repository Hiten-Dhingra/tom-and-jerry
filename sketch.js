var bg , bgImg ;
var cat , catImg , cat_collided;
var mouse , mouseImg ,mouse_collided ;

function preload() {
    //load the images here
    bgImg=loadImage("garden.png");
    catImg1=loadImage("cat1.png");
    catImg=loadAnimation("cat2.png","cat3.png");
    cat_collided=loadImage("cat4.png");
    mouseImg1=loadImage("mouse1.png");
    mouseImg=loadAnimation("mouse2.png","mouse3.png");
    mouse_collided=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(450,400,1000,800);
    bg =addImage(bgImg);
    //create tom and jerry sprites here
    cat=createSprite(900,600,20,20);
    cat=addImage(catImg1);
    mouse=createSprite(150,600,20,20);
    mouse=addImage(mouseImg1);
}

function draw() {

    background(255);
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if (cat.collide(mouse)){
        cat.changeAnimation("cat",cat_collided);
        mouse.changeAnimation("mouse",mouse_collided);
    }
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
   if (keyDown("space")){
  cat.addAnimation("cat",catImg);
  mouse.addAnimation("mouse",mouseImg);
  cat.velocityY=-4;
  mouse.velocityY=4;
   }

}
