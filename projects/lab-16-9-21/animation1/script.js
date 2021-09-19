console.log("h");

let button = document.getElementById('button');
let box =  document.getElementById('box');
let boxAngle=0;
let buttonangle=0;
button.addEventListener("click",()=>{
  boxAngle=boxAngle +360;
  box.style.transform = "rotate(" +boxAngle+ "deg)";


})

box.addEventListener("click",()=>{
  buttonangle=buttonangle +360;
  button.style.transform = "rotate(" +buttonangle+ "deg)";


})
