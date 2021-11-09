let counter = document.querySelector("#counter");
let n=0;
counter.addEventListener("click",()=>{
console.log("hello");
n++;
counter.innerHTML= n;
fetch("/add")
.then(data=>data.json())
.then(data=>{
  console.log("got data", data);
})
});
