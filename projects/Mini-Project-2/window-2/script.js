
let pic1 = document.getElementById("myImage1");
let pic2 = document.getElementById("myImage2");


function clock(){
  let d= new Date();
  let minutes = d.getMinutes();

  if(minutes<10){
      pic1.src="../images/"+minutes+".png";
      pic2.src="data:,";


  }
  else{
    let digit1 = parseInt(minutes/10);
    let digit2=minutes%10;
    pic1.src="../images/"+digit1+".png";
    pic2.src = "../images/"+digit2+".png";
  }




  setTimeout(clock,60000);
}

clock();
