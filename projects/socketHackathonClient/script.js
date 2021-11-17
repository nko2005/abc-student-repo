let socket = io("https://mirror-purrfect-mare.glitch.me");
let others = [];
let myId;
let testMode = false;
let total_users = 0;

//receiveMyId
socket.on('singleId', function(msg) {
  console.log("My ID:", msg.value, "the amount")
  myId = msg.value


});
// here I receive updated whenever someone disconnects or connects to the socket server.
socket.on('updatedClients', function(msg) {
  console.log("updatedClients", msg)
  others = msg.value

});


let all = document.getElementById("all");
let allbutme = document.getElementById("allbutme");
let randomSingle = document.getElementById("randomSingle");
let buttonOutput = document.getElementById("buttonOutput");

// let sliderallbutme = document.getElementById("sliderallbutme");
let sliderall = document.getElementById("sliderall");
// let sliderrandomsingle = document.getElementById("sliderrandomsingle");

let sliderOutput = document.body;

function buttonReceived(){
  buttonOutput.style.backgroundColor = "red";
  setTimeout(function(){
    buttonOutput.style.backgroundColor = "black";
  }, 500)
}

function sliderReceived(){
  sliderOutput.style.backgroundColor=""


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
