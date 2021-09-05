let x =0;
let range = document.getElementById("slider");
console.log("gg");
let valueDisplay= document.getElementById("valueDisplay");


range.addEventListener("change",function(){
  console.log("something happened")

});


range.addEventListener("input",function(){
  console.log("inputbhappenedinput")
  let value = range.value;
  console.log(value);
  valueDisplay.innerHTML= 100-value;
  });
