let text = "";



function handleMessage(request, sender, sendResponse) {

  console.log(request);
  while(request.type =="begin"){

    window.addEventListener("copy",()=>{
      console.log("we are here");
      text = window.getSelection().toString();
      //alert("copying text: " + text);
      console.log(text);
      });
  }
}
chrome.runtime.onMessage.addListener(handleMessage);

console.log("goodbye");
