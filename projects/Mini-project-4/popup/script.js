let button = document.getElementById('Button');

button.addEventListener("click", ()=>{

  // we retrieve the values in the text inputs:



  // now we ask the browser what the currently active tab in the active window is:
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // the browser gives as an array "tabs" containing all tabs that fit
    // out search query: {active: true, currentWindow: true}
    // in our case the array only one tab (tabs[0]) because only
    // one window is active and in it only one tab is active at a time.

    // the message can be a simple JS object
    let message = {
      initiate: true



    }

    // we tell chrome we want to send a message
    // the first argument is the id of the tab we want to contact
    // its the one we were searching for, the active one
    // the second argument is the message
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
})
