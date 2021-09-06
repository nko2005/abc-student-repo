function setup() {
  let canvas = createCanvas(windowWidth,800);
	canvas.id("p5-canvas");
	canvas.parent("p5-canvas-container");
	background(0);
}
function draw() {
	lollipop(width/2+400,height/2,1,300)
	lollipop(width/2-400,height/2,2,300)
	lollipop(width/2,height/2,3,300)


}

function lollipop(x,y,intcolor,size){
	push();
	translate(x,y);

	let frequency = frameCount*0.001
	let amplitude =  frequency
	let sineValue = sin(frequency)*amplitude

	let red = map( random(500),0,500, 0, 255);
	let green = map(sineValue, -255,255 , 0, 255);
	let blue = map(sineValue,-255,255, 0, 255);

	let noiseValue = noise(mouseX,frameCount)

  // turqoise-tan color
	if (intcolor==1){
		 red = map( random(500),0,500, 0, 255);
		 green = map(sineValue, -255,255 , 0, 255);
		 blue = map(sineValue,-255,255, 0, 255);
	}
	//pink-purple color
	else if(intcolor==2){
		green=0;

	}
	//red-black color
	else if(intcolor==3){
		green =0;
		blue =0;
	}
	//yellow-green color
	else if(intcolor==4){
		blue =0;
	}
	//turqoise
	else if (intcolor==5){
		red=50;
	}

	stroke(red, green,blue)
	noFill();


	rotate(noiseValue*frameCount)

	ellipse( noiseValue,sineValue,frameCount,frameCount)

	if(frameCount == size){
		noLoop();

	}
	pop();

}
