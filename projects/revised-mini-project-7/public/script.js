let socket = io();
let others = [];
let myId;
let testMode = false;
let total_users=0;

//receiveMyId
// socket.on('singleId', function(msg) {
//   console.log("My ID:", msg.value)
//   myId = msg.value
// });
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('incoming', (data)=> {
  console.log(data);
  total_users=data.value;
  console.log(total_users);
  console.log("total users (got this from server):", total_users)
//  others = msg.value

  // console.log("total users :", total_users);
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
