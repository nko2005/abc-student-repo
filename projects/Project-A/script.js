/*
console.log("Browser Language: " + navigator.browserLanguage);
console.log("Language: " + navigator.language);
console.log("Platform: " + navigator.platform);
console.log("Connection Speed: " + navigator.connectionSpeed);
console.log("User Agent: " + navigator.userAgent);
console.log("Webdriver: " + navigator.webdriver);
console.log("Geolocation: " + navigator.geolocation);
console.log("extra" + navigator.userAgentData);

console.log("device" + window.navigator.userAgent);

*/
if ("geolocation" in navigator) {
    // Do something with coordinates returned
    function processCoords(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        console.log(latitude,longitude);
        // Set h2 text as coordinates


        // Append h2 to document


        // Fetch Coordinates
        navigator.geolocation.getCurrentPosition(processCoords);



    // /const KEY = "AIzaSyD8LFh53VddzDevOC6A5Jhln9KgpmpoExg";
    const ActualKeylol = "AIzaSyBdbFJuSYodgUsF2F2wz7fdm56b97tkr50";
    const LAT =  latitude;
    const LNG = longitude;
    let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${LAT},${LNG}&key=${ActualKeylol}`;

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


}
}
