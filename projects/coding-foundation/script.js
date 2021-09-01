let the_text = document.getElementById('_num_');
const the_button = document.getElementById("_btn_");

const clear_button = document.getElementById("_clr_btn_");
let square_area = document.getElementById("square-space")
the_button.innerHTML="don't click me!";

clear_button.addEventListener("click",function(){
  square_area.innerHTML="";


});


the_button.addEventListener("click",function(){

  let the_input = parseInt(the_text.value);

  for (let i =0; i<the_input; i++){
    let box = document.createElement("div")


    let textnode = document.createTextNode(i+"");
    box.appendChild(textnode);
    square_area.appendChild(box);
    //square_area.appendChild(document.createElement("button"));

  }




});
