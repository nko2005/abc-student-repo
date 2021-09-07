let range = document.getElementById("slider");
let square_area = document.getElementById("square-space")

range.addEventListener("change",function(){

  square_area.innerHTML="";

    let slider_value =range.value;
    for(let i=0;i<slider_value+50;i++){
      let box = document.createElement("div")


      let textnode = document.createTextNode("");

      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      let m = Math.floor(Math.random() * 20);
      console.log(r);


      box.appendChild(textnode);
      box.style.backgroundColor="rgb("+r+","+g+","+m+")";
      box.style.width = r+"px";
      box.style.height = b+"px";
      box.style.margin=m+"px";




      square_area.appendChild(box);
    }








  });
