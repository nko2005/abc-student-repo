console.log('troll');
// background-script.js
/*
let counter=0;
//when this script runs for the first time ( or after chrome closes or restarts)
// we get the most recent count from local storage

chrome.storage.local.get(["counterInStorage"], function(result){
  console.log("got this from storage", );
  console.log("current local value is: " + result.counterInStorage );
  if(result.counterInStorage =="undefined"){
    counter =0;
    chrome.storage.local.set({counterInStorage: counter},()=>{
      console.log("saved", counter, "to local storage");
    });
  }
  counter = result.counterInStorage;
})
function handleMessage(request, sender, sendResponse) {

  console.log(request);
  if(request.type =="increaseCounter"){
    counter++;
  }
  else if(request.type=="getCount"){
    sendResponse(counter)
  }
  console.log("counter in backgroud: ", counter);
  // increase counter in local storage
  chrome.storage.local.set({counterInStorage: counter},()=>{
    console.log("saved", counter, "to local storage");
  });
}
chrome.runtime.onMessage.addListener(handleMessage);

*/
let defaultDuration = 15.0;
function createAlarm(){
  chrome.alarms.create("postureCheck", { periodInMinutes: defaultDuration} );

}

chrome.alarms.onAlarm.addListener(function (alarm){

  let x = screen.width/2-300
  let y = screen.height/3

  let popupwidth = 300;
  let popupheight = 300;

  let specs = "width="+popupwidth+",height="+popupheight+",left="+x+",top="+y;
  let the_window =  window.open("posture.html","",specs);
  setTimeout(()=> {the_window.close();}, 5000);

});
