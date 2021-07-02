var Tom, TomImg1,TomImg2,TomImg3
var Mokey, MokeyImg1,MokeyImg2,MokeyImg3
var background, backgroundImage
function preload() {
   TomImg1=loadAnimation("images/cat1.png")
   TomImg2=loadAnimation("images/cat2.png", "images/cat3.png")
   TomImg3=loadAnimation("images/cat4.png")
   MokeyImg1=loadAnimation("images/mouse1.png")
   MokeyImg2=loadAnimation("images/mouse2.png", "images/mouse3.png")
   MokeyImg3=loadAnimation("images/mouse4.png")
   backgroundImage= loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    Tom= createSprite(870,600)
    Tom.addAnimation("tomSleeping",TomImg1)
    Tom.scale=0.2
    Mokey= createSprite(200, 600)
    Mokey.addAnimation("Krimah",MokeyImg1)
    Mokey.scale=0.12
}

function draw() {

    background(backgroundImage);
    if(Tom.x - Mokey.x < (Tom.width - Mokey.width)/2) { 
        Tom.velocityX=0; 
        Tom.addAnimation("tomLastImage", TomImg3); 
        Tom.x =300; 
        Tom.scale=0.2; 
        Tom.changeAnimation("tomLastImage"); 
        Mokey.addAnimation("jerryLastImage", MokeyImg3); 
        Mokey.scale=0.15; 
        Mokey.changeAnimation("jerryLastImage"); 
    }

    drawSprites();
}


function keyPressed(){
 if (keyCode===LEFT_ARROW){
   Tom.velocityX=-5
   Tom.addAnimation("TomRunning", TomImg2)
   Tom.changeAnimation("tomRunning")
   Mokey.addAnimation("jerryTeasing", MokeyImg2); 
   Mokey.frameDelay = 25; 
   Mokey.changeAnimation("jerryTeasing");
 }
  


}
