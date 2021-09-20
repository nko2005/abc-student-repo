

let popupwidth = 550;
let popupheight = 250;

let screenw = screen.width;
let screenh= screen.height;
let x = Math.random()*(screenw-popupwidth);
let y = Math.random()*(screenh-popupwidth);

let specs = "width="+popupwidth+",height="+popupheight+",left="+x+",top="+y;

let hourWindow= window.open("window-1/index.html","",specs);
// setTimeout(()=>{hourWindow.close();},5000);



let para = document.getElementById("time");


function clock(){
  let d= new Date();
  para.innerText=d.toLocaleTimeString();

  setTimeout(clock,1000);
}

clock();
