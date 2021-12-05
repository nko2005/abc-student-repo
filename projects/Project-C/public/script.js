let socket = io();
let lines=[];

let save_button = document.getElementById('button');
let color = document.getElementById('color-picker');
let image = document.getElementById("tester");
// console.log(color);


let slider = document.getElementById('brush-size');
let diameter= document.getElementById("diameter");


// console.log(size);
class  Brush{

	constructor(brushColor,brushSize){
		this.px=pmouseX
		this.py=pmouseY
		this.x=mouseX
		this.y=mouseY

		this.brushColor= brushColor;
		this.brushSize= brushSize;
	}
	show(){

		stroke(this.brushColor)
		strokeWeight(this.brushSize)
		line(this.px,this.py,this.x,this.y)
	}
}

slider.addEventListener("change",()=>{

diameter.innerHTML=slider.value;

});

function setup() {
	let canvas = createCanvas(1200, 600);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
	// canvas.focus();
	background(255,255,255);
}

function draw() {
	// noStroke();
	// ellipse(mouseX, mouseY, 20, 20);
	if(mouseIsPressed){
		let actual_color = color.value;
		// console.log(actual_color)
		let brush = new Brush(actual_color,slider.value)
		lines.push(brush)
	}

	for(let i =0; i<lines.length;i++){

		lines[i].show();
	}



}

// document.onload = function() {

            // canvas.click();
            // canvas.focus();
            // canvas.preventDefault();
        // }
//from stack overflow




save_button.addEventListener("click",()=>{
	let drawing = canvas.toDataURL();
	image.src =drawing;


});
