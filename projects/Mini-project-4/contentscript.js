
function annoy(initiate){
 if(initiate){
   window.alert("Time is ticking...");


  // document.body.innerHTML.style.backgroundColor= "blue";
   window.open("https://www.youtube.com/watch?v=wPSWsz2R6Xc&t=10s", "_blank");


   //setTimeout(annoy,1000);
 }





}



// funtion to execute when any message arrives
function gotMessage(request, sender, sendResponse){
  // request includes the actual message
  console.log(request);

  // use our replacement function to replace words as instructed by the popup page
//  repl(request.find, request.replace)
  annoy(request.initiate);
  // sender lets us know who the message is fro (ie from our popup page)
  // sendResponse is a function and allows us to reply to the sender (our popup page)
  // sendResponse({message: "successfully replaced words!"});

}




// listening for messages:
chrome.runtime.onMessage.addListener(gotMessage);
// more on messaging: https://developer.chrome.com/extensions/messaging
