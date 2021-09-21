
let button = document.getElementById('button');
let button2 = document.getElementById('troll');

button.addEventListener("click",()=>{
  document.body.style.backgroundColor= "black";

})

button2.addEventListener("click",()=>{
  document.body.style.backgroundImage= "url(troll.png)";
  console.log("test");

})
