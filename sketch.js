function setup() {
  createCanvas(500,500);
}

function draw() {
  background("black");
mouseClicked();
}
function mouseClicked(){
  fill("pink")
  textSize(100)
  text("Welcome",mouseX,mouseY)
  textSize(50);
  text('Atticus Cohen',mouseX+50,mouseY+50)
}