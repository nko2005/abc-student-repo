document.body.style.background = "#4682B4";
// console.log("I am contentscript");
let img_list = [];

function handleMessage(request, sender, sendResponse) {
console.log(request);
if(request.type=="getImg"){
  // console.log("success");
  let images = document.getElementsByTagName('img');
  // sendResponse("success");



     for(let i = 0; i < images.length; i++){
       img_list.push(images[i].src);

     }
  // console.log("the lsit",img_list);
  let message = {type: "imageData", stuff: img_list}
  chrome.runtime.sendMessage(message);
  // console.log("message sent!");


 }
}
chrome.runtime.onMessage.addListener(handleMessage);
