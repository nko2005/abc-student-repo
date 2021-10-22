function received(tabs){
  let currenTab = tabs[0];
  chrome.tabs.sendMessage(currentTab.id, {msg:"It's, me the popup window"});
}

chrome.tabs.query({active:true,currentWindow: true};
