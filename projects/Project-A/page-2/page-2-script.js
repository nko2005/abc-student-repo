let square_area = document.getElementById("square-space");
  for (let i =1; i<=48; i++){
    let box = document.createElement("div")


    let textnode = document.createTextNode("");
    box.appendChild(textnode);
    square_area.appendChild(box);


  }
