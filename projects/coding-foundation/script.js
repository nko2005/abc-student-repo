
//Grabbing the html elements
let the_text = document.getElementById('_num_');
const the_button = document.getElementById("_btn_");
const clear_button = document.getElementById("_clr_btn_");
let square_area = document.getElementById("square-space")

//Event for the reset button to clear the div
clear_button.addEventListener("click",function(){
  square_area.innerHTML="";


});

//Event for when submiting the number entered
the_button.addEventListener("click",function(){

  let the_input = parseInt(the_text.value);

  for (let i =1; i<=the_input; i++){
    let box = document.createElement("div")


    let textnode = document.createTextNode(i+"");
    box.appendChild(textnode);
    square_area.appendChild(box);
    

  }




});
