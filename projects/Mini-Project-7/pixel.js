let img;
let clr;

function preload() {
  //Image adapted from wallpaperaccess.com
	img = loadImage("Shanghai.jpg");
	//clr = color(255, 255, 0);
}

function setup() {
	// createCanvas(690, 445);
  let canvas = createCanvas(windowWidth,windowHeight);
	canvas.id("p5-canvas");
	canvas.parent("p5-canvas-container");
	background(100);
}

function draw() {



	//clr = img.get(mouseX, mouseY);

	for (let i=0; i<500; i++) {
		let x = floor(random(width));
		let y = floor(random(height));
		let dia = random(5, 10);
		clr = img.get(x, y); // from img
		noStroke();
		fill(clr);
		rect(x, y, dia, dia);
		//text("SHANGHAI", x, y);

	}
	//noLoop();
	// to show the picked color


}
