// console.log("testing");

let button = document.querySelector("#button");

let the_div = document.querySelector("#image-container")
button.addEventListener("click",()=>{
 // console.log("clicked");
 let message= {type: "getImg"}
 chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, message);
    console.log("sent");



 });
});
function handleMessage(request, sender, sendResponse) {
if(request.type=="imageData"){
  // console.log("got something");
  let images = request.stuff;
  console.log(images);
  for(let i=0; i<images.length;i++){
    let new_img = document.createElement("img");
    new_img.src = images[i];
    new_img.width =600;
    new_img.height =600;


    let new_divlet= document.createElement("div");
    new_divlet.appendChild(new_img);
    the_div.appendChild(new_divlet);
  }
 }
}
chrome.runtime.onMessage.addListener(handleMessage);
