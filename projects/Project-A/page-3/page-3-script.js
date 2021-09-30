
/*
// on IE10 x86 platform preview running in IE7 compatibility mode on Windows 7 64 bit edition
console.log("name " + platform.name); // 'IE'
console.log("version " +platform.version); // '10.0'
console.log(" layout" +platform.layout); // 'Trident'
console.log("os " +platform.os); // 'Windows Server 2008 R2 / 7 x64'
console.log(" description" +platform.description); // 'IE 10.0 x86 (platform preview; running in IE 7 mode) on Windows Server 2008 R2 / 7 x64'

// or on an iPad
console.log("name " + platform.name); // 'Safari'
console.log("version " +platform.version); // '5.1'
console.log("product" +platform.product); // 'iPad'
console.log("manufacturer "+platform.manufacturer); // 'Apple'
console.log("layout "+platform.layout); // 'WebKit'
console.log("os" +platform.os); // 'iOS 5.0'
console.log("description"+platform.description); // 'Safari 5.1 on Apple iPad (iOS 5.0)'
*/

let input_1 = document.getElementById("input-1");
let input_2 = document.getElementById("input-2");

let button = document.getElementById("submit");


button.addEventListener("click",()=>{

  if(input_1.value==platform.name && input_2.value == platform.os){

     console.log("successs");
     let div = document.createElement("div");
     let os = platform.os;
     div.style.position = "absolute";
     div.style.top = "70%";
     div.style.left = "25%";
     div.style.background = "Green";
     div.style.color = "white";
     div.style.fontSize= 32+"px";
     div.innerHTML = "You solved the puzzle! You are on " + platform.description+ " :)";




     document.body.appendChild(div);



  }






});
