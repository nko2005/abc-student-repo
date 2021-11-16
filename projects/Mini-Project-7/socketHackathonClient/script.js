let socket = io("https://mirror-purrfect-mare.glitch.me");
let others = [];
let myId;
let testMode = false;
let total_users=0;

//receiveMyId
socket.on('singleId', function(msg) {
  console.log("My ID:", msg.value)
  myId = msg.value
});
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('updatedClients', function(msg) {
  console.log("updatedClients", msg)
  others = msg.value
  total_users = msg.value.length
  console.log("total users :", total_users);
});



let img;
let clr;
let square_Value = 120;

function preload() {
  //Image adapted from wallpaperaccess.com
	img = loadImage("../Shanghai.jpg");
	//clr = color(255, 255, 0);
}

function setup() {
	// createCanvas(690, 445);
  let canvas = createCanvas(3840,2160);
	canvas.id("p5-canvas");
	canvas.parent("p5-canvas-container");
	background(0);
}

function draw() {



	//clr = img.get(mouseX, mouseY);

	for (let i=0; i<500; i++) {
		let x = floor(random(width));
		let y = floor(random(height));
    let final_square_value = square_Value-total_users*20
    if(total_users==6){
      final_square_value=10
    }
		let dia = random(5,final_square_value);
		clr = img.get(x, y); // from img
		noStroke();
		fill(clr);
		rect(x, y, dia, dia);
		//text("SHANGHAI", x, y);

	}
	//noLoop();
	// to show the picked color


}






/*
let all = document.getElementById("all");
let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");

let sliderallbutme = document.getElementById("sliderallbutme");
let sliderall = document.getElementById("sliderall");
let sliderrandomsingle = document.getElementById("sliderrandomsingle");



function buttonReceived(){
  buttonOutput.style.backgroundColor = "red";
  setTimeout(function(){
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}

function sliderReceived(){

}

all.addEventListener("click",()=>{
  console.log("click");


  socket.emit('button1ToAll');
})

allbutme.addEventListener("click",()=>{
  console.log("click");

  socket.emit('button1ToAllButMe');
})

randomSingle.addEventListener("click",function(){

  if(others.length>0){
    let ranFloat = Math.random()*others.length
    let ranIdx = Math.floor(ranFloat)
    let randomOtherId= others[ranIdx];
    socket.emit('button1ToSingle',{id: randomOtherId})
  }
})

socket.on('button1', function(msg) {
  if(testMode && msg.from != myId){return}
  console.log(msg)
  buttonReceived()
});

myRange.addEventListener
*/
