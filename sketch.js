var a,b;
 function setup(){
  createCanvas(600,600);
  a=createSprite(100,50,50,30);
  a.shapeColor="green";
  b=createSprite(200,200,30,50); 
  b.shapeColor="green";
  }
   function draw(){
    background(255);
    console.log(a.x-b.x);
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.x-b.x>-40 && b.x-a.x>-40)
    {
       a.shapeColor="red";
       b.shapeColor="red";
       }
  else {
     a.shapeColor="green";
      b.shapeColor="green"; 
    }
    a.x=World.mouseX;
    a.y=World.mouseY;
    drawSprites(); 
    }
