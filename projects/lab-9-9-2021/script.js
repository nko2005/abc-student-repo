console.log("p");
let button = document.getElementById("button");
console.log(button);
function openWindow(){
  let popupwidth = 200;
  let popupheight = 200;


  let screenw = screen.width;
  let screenh= screen.height;
  let x = Math.random()*(screenw-popupwidth);
  let y = Math.random()*(screenh-popupwidth);

  let specs = "width="+popupwidth+",height="+popupheight+",left="+x+",top="+y;

  let myWindow= window.open("https://abc.leoneckert.com/","",specs);
  setTimeout(()=>{myWindow.close();},5000);
}

function openMany(){

  for(let i=0;i<10;i++){
    openWindow();
  }
}
button.addEventListener("click",()=>{
  console.log("click");
  openMany();

});
