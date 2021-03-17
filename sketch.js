var hor,mi,sec;
var bac1 , bac2;
function preload(){

  bac1 = loadImage("day.jpg");
  bac2 = loadImage("back1.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
}

function draw() {
  background(0);
    if(hor >= 6 && hor <= 18 ){
    background (bac1)
  }else  
    background (bac2)
  translate(windowWidth/2,windowHeight/2);
  rotate(-90);

  hor = hour();
  mi  = minute();
  sec = second();
  
  //fill(255);
  //noStroke();
  //text(hor + ':' + mi + ':' + sec,0,0)
  
  strokeWeight(0.1)
  stroke("Blue")
  noFill();
  ellipse(0,0,280,280)
  
  strokeWeight(0.1)
  stroke("violet")
  noFill();
  ellipse(0,0,300,300)
  
  strokeWeight(0.1)
  stroke("yellow")
  noFill();
  ellipse(0,0,260,260)


    textSize(25);
    noStroke();
    fill(0,0,255);
    text("BLUE stands for HOUR HAND", 600,290);

    textSize(25);
    noStroke();
    fill(255,0,0);
    text("RED stands for SECONDS HAND", 600,370);

    textSize(25);
    noStroke();
    fill(0,255,0);
    text("GREEN stands for MINUTES HAND", 600,330);

   strokeWeight(8)
  stroke("violet")
  noFill();
  let end1 = map(sec , 0 , 60 ,0, 360)
  arc(0,0,300,300,0,end1)
  
  push();
  rotate(end1)
  strokeWeight(5)
  stroke("violet")
  line(0,0,100,0)
  pop();
  
 
  
    stroke("blue")
   let end2 = map(mi , 0 , 60 ,0, 360)
  arc(0,0,280,280,0,end2)
     push();
  rotate(end2)
  fill("blue")
  stroke("blue")
  strokeWeight(6.5)
  line(0,0,85,0)
  pop();

    stroke("yellow")  
  let end3 = map(hor % 12 , 0 , 12 ,0, 360)
  arc(0,0,260,260,0,end3)
  
       push();
  rotate(end3)
  fill("blue")
  stroke("yellow")
    strokeWeight(8)
  line(0,0,75,0)
  pop();
  
  stroke(255);
  point(0,0)
  
  
   
}
