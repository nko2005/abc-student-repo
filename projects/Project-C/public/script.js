let save_button = document.getElementById('button');

function setup() {
	let canvas = createCanvas(windowWidth, windowHeight);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
	background(100);
}

function draw() {
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
}
