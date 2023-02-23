let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(150,200,200);



  strokeWeight(0)
  fill(244,164,96)
  
  ellipse(100,130,100,120) // badan 

  
  strokeWeight(0)
  fill(255,255,255)
  ellipse(80,80,30,40) // mata kiri
  ellipse(120,80,30,40) // mata kanan
  
  
  strokeWeight(0)
  fill(184,134,11)
  ellipse(100,150,40,50) // mulut


  strokeWeight(12)
  point(120,80) // bola mata kanan
  point(80,80) // bola mata kiri

  strokeWeight(2)
  fill(0,0,0)
  line(200,0,200,400)
  
  ///////////////////////////////////////
  

  strokeWeight(0)
  fill(244,164,96)
  
  ellipse(300,130,100,120) // badan 
  
  strokeWeight(0)
  fill(255,255,255)
  ellipse(280,80,30,40) // mata kiri
  ellipse(320,80,30,40) // mata kanan
  


  var y = 80 + 2 * Math.sin(PI/10*j)
  j+=1
  fill(0,0,0);
  ellipse(280, y, 12, 12);
  ellipse(320, y, 12, 12);

  strokeWeight(0)
  fill(184,134,11)
  ellipse(300,150,40,50) // mulut


  strokeWeight(12)
  
  


}