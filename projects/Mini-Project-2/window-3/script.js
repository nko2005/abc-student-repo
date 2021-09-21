
let pic1 = document.getElementById("myImage1");
let pic2 = document.getElementById("myImage2");


function clock(){
  let d= new Date();
  let hours = d.getHours();

  if(hours<10){
      pic1.src="../images/"+ hours+".png";
      pic2.src="data:,";


  }
  else{
    let digit1 = parseInt(hours/10);
    let digit2=hours%10;
    pic1.src="../images/"+digit1+".png";
    pic2.src = "../images/"+digit2+".png";
  }




  setTimeout(clock,3600000);
}

clock();
