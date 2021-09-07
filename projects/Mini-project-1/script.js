let range = document.getElementById("slider");
range.addEventListener("input",function(){
  console.log("inputbhappenedinput")
  let value = range.value;
  console.log(value);
  valueDisplay.innerHTML= 100-value;
  });
