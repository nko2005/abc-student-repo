console.log("Cookies: " + navigator.cookieEnabled);
console.log("Browser Language: " + navigator.browserLanguage);
console.log("Language: " + navigator.language);
console.log("Platform: " + navigator.platform);
console.log("Connection Speed: " + navigator.connectionSpeed);
console.log("User Agent: " + navigator.userAgent);
console.log("Webdriver: " + navigator.webdriver);
console.log("Geolocation: " + navigator.geolocation);
console.log("extra" + navigator.userAgentData);

console.log("device" + window.navigator.userAgent);

/*
if ("geolocation" in navigator) {
    // Do something with coordinates returned
    function processCoords(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        let first_div = document.querySelector('div');
        let el_h2 = document.createElement('h2');

        // Set h2 text as coordinates
        el_h2.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;

        // Append h2 to document
        first_div.appendChild(el_h2);


        // Fetch Coordinates
        navigator.geolocation.getCurrentPosition(processCoords);




    const KEY = "AIzaSyD8LFh53VddzDevOC6A5Jhln9KgpmpoExg";
    const ActualKeylol = "AIzaSyBdbFJuSYodgUsF2F2wz7fdm56b97tkr50";
    const LAT =  latitude;
    const LNG = longitude;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${ActualKeylol}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let parts = data.results[0].address_components;
      document.body.insertAdjacentHTML("beforeend",`<p>Formatted: ${data.results[0].formatted_address}</p>`);
    parts.forEach(part => {
      if (part.types.includes("country")) {
        //we found "country" inside the data.results[0].address_components[x].types array
        document.body.insertAdjacentHTML(
          "beforeend",
          `<p>COUNTRY: ${part.long_name}</p>`
        );
      }


}
}

*/
