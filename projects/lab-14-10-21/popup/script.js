console.log("testing");
let button = document.querySelector("#button");
let count = document.querySelector("#count");

let counter = 0;

button.addEventListener("click",()=>{
let message_2 = {type: "getCount"}
chrome.runtime.sendMessage(message_2, (response)=>{console.log("background sent this", response)});


counter++;
//tell background script we increased the counter
//learned here: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/runtime/sendMessage
let message = {type: "increaseCounter"}
chrome.runtime.sendMessage(message);
count.innerHTML=counter;

});
