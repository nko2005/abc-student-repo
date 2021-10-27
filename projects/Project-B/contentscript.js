let text = "";
//console.log("received");

window.addEventListener("copy",()=>{
  //console.log("we are here");
  text = window.getSelection().toString();
  //alert("copying text: " + text);

  //console.log(text);
  let message = {type: "count", stuff: text}
  chrome.runtime.sendMessage(message);



  });


function handleMessage(request, sender, sendResponse) {
/*
  console.log(request);
  if(request.type =="begin"){
    console.log("received");

    window.addEventListener("copy",()=>{
      //console.log("we are here");
      text = window.getSelection().toString();
      //alert("copying text: " + text);

      //console.log(text);
      let message = {type: "count", stuff: text}
      chrome.runtime.sendMessage(message);



      });
  }
  */
   if(request.type=="fade"){
    //code adapted from Professor Leon Eckert and slightly modified
    let ptags = document.body.querySelectorAll("p");
    let ignoreTags = ["SCRIPT", undefined, "PICTURE"];

    function superFunctionForTags(tag){

    //  console.log("tag", tag);
    //  console.log("tagname", tag.tagName);
      if(ignoreTags.includes(tag.tagName) || tag.innerHTML == ""){
        return tag.outerHTML;
      }
      let emptyTag = tag.cloneNode();
      emptyTag.innerHTML = "";
  //    console.log("empty", emptyTag.outerHTML)
      let outterTags = emptyTag.outerHTML.split("><");
      outterTags[0]+=">";
      outterTags[1]="<"+outterTags[1];

      //   console.log("child", tag);
      //   console.log("childtext", tag.innerText);
      let spanifiedString = "";
      for(let j = 0; j < tag.childNodes.length; j++){
        let cn = tag.childNodes[j];
        //     console.log(cn)
        if(cn.nodeName == "#text"){
          let words = cn.textContent.trim().split(" ");
          let spans = words.map(word=>{return "<span class='nawafnawaf'>"+word+"</span>"})
          let spanString = spans.join(" ")
//         console.log("spanstring:", spanString);

          spanifiedString+=spanString + " "
        }else{
          let spanString = superFunctionForTags(cn);
//         console.log("nested spanstring:", spanString);

          spanifiedString+=spanString + " "
        }
      }
      return outterTags[0] + spanifiedString.substring(0,spanifiedString.length-1)  + outterTags[1]

}

// for(let i = 0; i < ptags.length; i++){
//   let p = ptags[i];
//   let pstring = superFunctionForTags(p);
//   p.innerHTML = pstring;
// }
document.body.innerHTML = superFunctionForTags(document.body)

let nawafNawafs = document.getElementsByClassName("nawafnawaf")
for(let i = 0; i <nawafNawafs.length ; i++){
   let the_word = nawafNawafs[i].innerText;
   // console.log(the_word);
   if(/^[a-zA-Z]+$/.test(the_word)){
     let word_letter = the_word.substring(0,1).toLowerCase();
     let dictionary = request.stuff;

     let letterCount = dictionary[word_letter];
  //   console.log("world letter", word_letter);
    // console.log("letter count", letterCount);
     let opacityValue = 1 - letterCount/200;
  //   console.log("Opacity value",opacityValue);
     nawafNawafs[i].style.opacity=opacityValue;
     //nawafNawafs[i].style.color="coral";
   }





}






  }
}
chrome.runtime.onMessage.addListener(handleMessage);

// console.log("goodbye");

/*
    window.addEventListener("copy",()=>{
      console.log("we are here");
      text = window.getSelection().toString();
      //alert("copying text: " + text);

      console.log(text);
      let message = {type: "count", stuff: text}


      });
*/
