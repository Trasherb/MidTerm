let x,y,x2,y2,rad,xDir,yDir,speed,speedmult,r,g,b,angle,scale,num,angle1,numShapes,angleShape0,angleShape1,angleShape2,angleShape3,angleShape4,anglemult;
let myColor=['#FFED00','black','white']
let angleshaper=[angleShape0,angleShape1,angleShape2,angleShape3,angleShape4]
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

     angleShape1=20
  angleShape0=200
  angleShape2=100
  angleShape3=300
  angleShape4=50
  x=width/2
  y=height/2  
  x2=width/2
  y2=height/2
  //x=random(0,height);
  //y=random(0,width);
  angle = random(0,360);
  angle1=30
  numShapes=5
  speedmult=1
  anglemult=1

  
  xDir= random(-2,2);
  yDir=random(-2,2);
  background(193,247,201);
}
function draw() {
  background(myColor[0]);
    circleDraw2(myColor[0])
    
  push()
  scale=map(sin(angle),-1,1,.9,1.75)
  circleDraw(myColor[0],rad);
  update(3.5);
  speedup();
  keepInCanvas();
   angle+=2;

  pop()
  
   mySignature();
  
}








/////////////MyFunctions!///////////////


function circleDraw(col,radius)
{
  push();

 
  translate(x,y)
  fill(col)
  circle(0,0,200/scale);
          rotate(angleShape1)
  if((x<0)||(x>width)||(y<0)||(y>height))
    {
      anglemult=-anglemult
    }

  noFill();
 arc(0,10,120/scale,90/scale,0,180)
   arc(60/scale,7/scale,20/scale,5/scale,0,180)
   arc(-60/scale,7/scale,20/scale,5/scale,0,180)
  
  fill(myColor[1])
  
 
   ellipse(20/scale,-50/scale,5/scale,20/scale)
   ellipse(-20/scale,-50/scale,4/scale,17/scale)   
  pop();
  
     angleShape1 += anglemult
  //ellipse(x-35,y-20,10,50)
  
  
}
function circleDraw2(col)
{

       for(i=0;i<numShapes;i++)
         {
  push();
             let scale=map(sin(angle),-1,1,.8,1)
  translate(x2/28*20*i,40)
          
  fill(col)
  circle(0,0,200/scale);
   rotate(angleShape0)
  noFill();
 arc(0,10,120/scale,90/scale,0,180)
   arc(60/scale,7/scale,20/scale,5/scale,0,180)
   arc(-60/scale,7/scale,20/scale,5/scale,0,180)
  
  fill(myColor[1])
 
   ellipse(20/scale,-50/scale,5/scale,20/scale)
   ellipse(-20/scale,-50/scale,4/scale,17/scale)   
  pop();
         }
  
       for(i=0;i<numShapes;i++)
         {
  push();
             let scale=map(sin(angle),-1,1,.7,1)
  translate(x2/28*20*i,200)
  fill(col)
  circle(0,0,200/scale);
   rotate(angleShape2)
  noFill();
 arc(0,10,120/scale,90/scale,0,180)
   arc(60/scale,7/scale,20/scale,5/scale,0,180)
   arc(-60/scale,7/scale,20/scale,5/scale,0,180)
  
  fill(myColor[1])
 
   ellipse(20/scale,-50/scale,5/scale,20/scale)
   ellipse(-20/scale,-50/scale,4/scale,17/scale)   
  pop();
         }
  
  //ellipse(x-35,y-20,10,50)
  
  
       for(i=0;i<numShapes;i++)
         {
  push();
           let scale=map(sin(angle),-1,1,0.9,1.2)
  translate(x2/2*i,350)
  fill(col)
  circle(0,0,200/scale);
   rotate(angleShape3)
  noFill();
 arc(0,10,120/scale,90/scale,0,180)
   arc(60/scale,7/scale,20/scale,5/scale,0,180)
   arc(-60/scale,7/scale,20/scale,5/scale,0,180)
  
  fill(myColor[1])
 
   ellipse(20/scale,-50/scale,5/scale,20/scale)
   ellipse(-20/scale,-50/scale,4/scale,17/scale)   
  pop();
           
   
         angleShape2-=0.1
           angleShape3+=0.1
           angleShape0+=0.1
        
           
         }
  
}



/*function circleDraw(radius)
{
  fill(myColor[0])
  circle(x,y,radius);
  
  noFill();
 arc(x,y+10,120,90,0,180)
   arc(x+60,y+7,20,5,0,180)
   arc(x-60,y+7,20,5,0,180)
  
  fill(myColor[1])
 
   ellipse(x+20,y-50,5,20)
   ellipse(x-20,y-50,4,17)   
  
  //ellipse(x-35,y-20,10,50)
  
  
}*/

function update(speed)
{
   x += xDir*speed;
  y += yDir*speed;
  speed += speedmult;
}

function keepInCanvas()
{
  if((x<0)||(x>width))
  {
    xDir=-xDir
  }
  if((y<0)||(y>height))
    {
      yDir=-yDir
}}

function speedup()
{
  
  
  if((speed<2)||(speed>20))
    {
      speedmult=-speedmult
    }
}

function mySignature()
{
  textSize(20);
  strokeWeight(4);
  stroke('black');
  fill('#FFB803');
  text('Asher Borison',width-145,height-20)
  
}