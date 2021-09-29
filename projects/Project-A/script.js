
console.log("Browser Language: " + navigator.browserLanguage);
console.log("Language: " + navigator.language);
console.log("Platform: " + navigator.platform);
console.log("Connection Speed: " + navigator.connectionSpeed);
console.log("User Agent: " + navigator.userAgent);
console.log("Webdriver: " + navigator.webdriver);
console.log("Geolocation: " + navigator.geolocation);
console.log("extra" + navigator.userAgentData);

console.log("device" + window.navigator.userAgent);

let submit = document.getElementById("submit");
let text_1 = document.getElementById("lat");
let text_2 = document.getElementById("long");
let latitude =0;
let longitude =0;
function geoFindMe() {

  // const status = document.querySelector('#status');
  // const mapLink = document.querySelector('#map-link');

  // mapLink.href = '';
  // mapLink.textContent = '';

  function success(position) {
    latitude  = position.coords.latitude;
    longitude = position.coords.longitude;

    // status.textContent = '';
    // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    console.log('Unable to retrieve your location');
  }

  if(!navigator.geolocation) {
    console.log('Geolocation is not supported by your browser');
  } else {
    console.log('Locating…');
    navigator.geolocation.getCurrentPosition(success, error);

    // for(let i =0; i<latitude.length )
  }
  console.log(latitude+","+ longitude);

}

console.log("resolution: " + window.screen.width + "X"  +window.screen.height)





let clue1 = "LINES"
document.querySelector('#find-me').addEventListener('click', geoFindMe);
document.querySelector('#find-me-2').addEventListener('click', ()=>{


 geoFindMe();
 for(let i=0;i<clue1.length;i++){
   // let random_x = Math.floor(Math.random() * 300) + 200;
   // let random_y = Math.floor(Math.random() * 200) + 100;
   let random_x = Math.floor(Math.random() * 100);
   let random_y = Math.floor(Math.random() * 100);

   let div = document.createElement("div");
   div.style.position = "absolute";
   // div.style.width = random_x+"px";
   // div.style.height = random_y+"px";
   div.style.top = random_x+"%";
   div.style.left =random_x+"%";
   div.style.background = "blue";
   div.style.color = "white";
   div.style.fontSize= 32+"px";
   div.innerHTML = clue1[i];

   document.getElementById("box").appendChild(div);

 }

});
submit.addEventListener("click",()=>{
  let input_1 = text_1.value.toLowerCase();
  let input_2 = text_2.value.toLowerCase();
  if (input_1==="latitude" && input_2 ==="longitude"){

  console.log("Sucess");
  let div = document.createElement("div");
  div.style.position = "absolute";
  div.style.top = "70%";
  div.style.left = "45%";
  div.style.background = "Green";
  div.style.color = "white";
  div.style.fontSize= 32+"px";
  div.innerHTML = "You solved the puzzle! Your geo location is: " + latitude + " " + longitude;
  document.body.appendChild(div);

}


});
/*

     const KEY = "AIzaSyBdbFJuSYodgUsF2F2wz7fdm56b97tkr50";
     const LAT = 50.1;
     const LNG = -97.3;
     let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${KEY}`;
     fetch(url)
       .then(response => response.json())
       .then(data => {
         console.log(data);
         let parts = data.results[0].address_components;
         document.body.insertAdjacentHTML(
           "beforeend",
           `<p>Formatted: ${data.results[0].formatted_address}</p>`
         );
         parts.forEach(part => {
           if (part.types.includes("country")) {
             //we found "country" inside the data.results[0].address_components[x].types array
             document.body.insertAdjacentHTML(
               "beforeend",
               `<p>COUNTRY: ${part.long_name}</p>`
             );
           }
           if (part.types.includes("administrative_area_level_1")) {
             document.body.insertAdjacentHTML(
               "beforeend",
               `<p>PROVINCE: ${part.long_name}</p>`
             );
           }
           if (part.types.includes("administrative_area_level_3")) {
             document.body.insertAdjacentHTML(
               "beforeend",
               `<p>LEVEL 3: ${part.long_name}</p>`
             );
           }
         });
       })
       .catch(err => console.warn(err.message));

*/
