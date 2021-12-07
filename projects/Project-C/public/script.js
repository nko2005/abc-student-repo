let socket = io();
let lines=[];

let save_button = document.getElementById('button');
let color = document.getElementById('color-picker');
let image = document.getElementById("tester");
// console.log(color);
let name = document.getElementById("name");

let slider = document.getElementById('brush-size');
let diameter= document.getElementById("diameter");

const d = new Date();
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
		push();
		stroke(this.brushColor)
		strokeWeight(this.brushSize)
		line(this.px,this.py,this.x,this.y)
		pop();
	}
}

slider.addEventListener("change",()=>{

diameter.innerHTML=slider.value;

});

function setup() {
	let canvas = createCanvas(1000, 400);
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

	rect(200,-8,10,10)
	rect(800,-8,10,10)

	rect(200,398,10,10)
	rect(800,398,10,10)

}

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }


// document.onload = function() {

            // canvas.click();
            // canvas.focus();
            // canvas.preventDefault();
        // }
//from stack overflow




save_button.addEventListener("click",()=>{
	let user = ""
	let drawing = canvas.toDataURL();
	if(name.value==""){
		user="Anonymous";

	}
	else{
		user = name.value;
	}

	let time = d.toISOString().slice(0, 10)

	let datapoint = {drawing:drawing, identity:user, timestamp: time }
	console.log(datapoint);

	socket.emit("newData",datapoint)

	window.location.href='tower/towers.html';



});
