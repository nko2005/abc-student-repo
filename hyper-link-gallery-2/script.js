// console.log("test");
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}



function draw() {
	magic_spiral()


}

function magic_spiral(){
	push();
	let red = map(mouseX, 0, width, 0, 255);
	let green = map(mouseY, 0, width, 0, 255);
	let blue = map(mouseX, 0, width, 255, 0);

	stroke(red, green, blue);
	noFill();


	translate(width/2,height/2);
	rotate(frameCount*0.01)

	rectMode(CENTER);
	rect(0,0,frameCount,frameCount);
	pop();
  if(frameCount==500){
    noLoop();
  }






}
