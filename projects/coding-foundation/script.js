const the_text = document.getElementById('_num_');
const the_button = document.getElementById("_btn_");
the_button.innerHTML="don't click me!";


the_button.addEventListener("click",function(){

  const the_input = the_text.value;
  console.log(the_input,"fff");




});
