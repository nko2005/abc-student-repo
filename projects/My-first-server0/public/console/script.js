console.log("it worked! Again");

let button = document.getElementById("button");
let input = document.getElementById("inputs");
button.addEventListener("click",()=>{

  console.log("click");
  let riddleAnswer= input.value;
  console.log("answer", riddleAnswer);
  window.location.href="/riddle2?word=" + riddleAnswer;
});
