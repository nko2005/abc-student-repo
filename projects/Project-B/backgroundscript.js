let reference ={"a":0,
"b":0,
"c":0,
"d":0,
"e":0,
"f":0,
"g":0,
"h":0,
"i":0,
"j":0,
"k":0,
"l":0,
"m":0,
"n":0,
"o":0,
"p":0,
"q":0,
"r":0,
"s":0,
"t":0,
"u":0,
"v":0,
"w":0,
"x":0,
"y":0,
"z":0};
let word_list =[];
function handleMessage(request, sender, sendResponse) {
 //console.log(request);
 if(request.type=="count"){

  let text = request.stuff.toLowerCase();
//  console.log("background",text);
  word_list = text.split(" ");
//  console.log("got the words: " ,word_list);

  for(let i=0; i<word_list.length;i++){
    let the_word = word_list[i];

    if(/^[a-zA-Z]+$/.test(the_word)){
        reference[the_word.substring(0,1)]+=1
      }


    }

    let message = {type:"fade", stuff: reference}

     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, message);
      //  console.log("sent from background");

    });


    //console.log(reference);


 }
}
chrome.runtime.onMessage.addListener(handleMessage);
