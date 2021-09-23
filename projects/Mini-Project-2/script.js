
let popupwidth = 600;
let popupheight = 250;

// let screenw = screen.width;
// let screenh= screen.height;
// let x = Math.random()*(screenw-popupwidth);
// let y = Math.random()*(screenh-popupwidth);

let x1 = screen.width
let x2 = screen.width/2-300
let y2 = 0;
let x3 = 0;
let y = screen.height/3




let specs1 = "width="+popupwidth+",height="+popupheight+",left="+x1+",top="+y;
let specs2 = "width="+popupwidth+",height="+popupheight+",left="+x2+",top="+y2;
let specs3 = "width="+popupwidth+",height="+popupheight+",left="+x3+",top="+y;

let secondsWindow= window.open("window-1/index.html","",specs1);
// setTimeout(()=>{hourWindow.close();},5000);
let minutesWindow = window.open("window-2/index.html","",specs2);

let hoursWindow = window.open("window-3/index.html","",specs3);








// let para = document.getElementById("time");


function clock(){
  let d= new Date();
  // para.innerText=d.toLocaleTimeString();

  if(d.getHours()>=6 && d.getHours()<=8){
    document.body.style.backgroundImage = "url(images/sunrise.jpg)";
  }
  else if( d.getHours()>8 && d.getHours()<12){
      document.body.style.backgroundImage = "url(images/sunrise.jpg)";

  }
  else if(d.getHours()>=12 && d.getHours()<=15){
    document.body.style.backgroundImage = "url(images/Noon.jpg)";

  }
  else if(d.getHours()>15 && d.getHours()<=18){
    document.body.style.backgroundImage= "url(images/sunset.jpg)";
  }
  else if(d.getHours()>18 && d.getHours()<=19){
    document.body.style.backgroundImage= "url(images/dusk.jpg)";

  }
  else if(d.getHours()>19 && d.getHours()<24){
      document.body.style.backgroundImage= "url(images/night.jpg)";

  }
  else if(d.getHours()>=24 || d.getHours()<5){
      document.body.style.backgroundImage= "url(images/midnight.jpg)";

  }
  else{
    document.body.style.backgroundImage="url(images/dawn.jpg)";
  }

  setTimeout(clock,600000);
}

clock();
