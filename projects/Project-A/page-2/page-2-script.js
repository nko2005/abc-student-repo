let square_area = document.getElementById("square-space");
let input_1 = document.getElementById("input-1");
let input_2 = document.getElementById("input-2");

let button= document.getElementById("submit");

  for (let i =1; i<=42; i++){
    let box = document.createElement("div");


    let textnode = document.createTextNode("");
    box.appendChild(textnode);
    square_area.appendChild(box);


  }
console.log("resolution: " + window.screen.width + "X"  +window.screen.height);
button.addEventListener("click",()=>{
  console.log("test" + input_1.value+input_2.value);

  if(input_1.value == window.screen.width && input_2.value == window.screen.height){

    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.top = "70%";
    div.style.left = "25%";
    div.style.background = "Green";
    div.style.color = "white";
    div.style.fontSize= 32+"px";
    div.innerHTML = "You solved the puzzle! Your screen resoultion is: " +  window.screen.width + "X"  +window.screen.height + ". What else do I know? :)";
    document.body.appendChild(div);
  }




});
