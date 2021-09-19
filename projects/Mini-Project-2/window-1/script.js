
let pic1 = document.getElementById("myImage1");
let pic2 = document.getElementById("myImage2");


function clock(){
  let d= new Date();
  let seconds = d.getSeconds();

  if(seconds<10){
      pic1.src="../images/"+seconds+".png";
      pic2.src="data:,";


  }
  else{
    let digit1 = parseInt(seconds/10);
    let digit2= seconds%10;
    pic1.src="../images/"+digit1+".png";
    pic2.src = "../images/"+digit2+".png";
  }




  setTimeout(clock,1000);
}

clock();
