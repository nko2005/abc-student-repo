let socket = io();
let images_container = document.getElementById("drawings-container");

let info_container = document.getElementById("drawings-info");
// console.log(images_container);
let presented_data = {};
socket.on("allData",(allData)=>{

  // console.log(allData);
  presented_data=allData;
  let dataPoints = Object.keys(presented_data);
  for(let i=0; i<dataPoints.length;i++){

      let image = document.createElement("img");

      image.src=  presented_data[dataPoints[i]].drawing;
      image.width=500;
      image.height = 200;
      // console.log( presented_data[dataPoints[i]].drawing)
      images_container.appendChild(image);

      let info = presented_data[dataPoints[i]].identity;
      let theTimeStamp = presented_data[dataPoints[i]].timestamp;

      let div_tag = document.createElement("div");
      div_tag.innerHTML= "By: " + info + " " + "on " + theTimeStamp;

      console.log(div_tag);
      div_tag.style.marginTop="95px";
      div_tag.style.marginBottom="95px";


    info_container.appendChild(div_tag);




  }











});

socket.on("newDrawing",(datapoint)=>{
  // console.log("from server on databse upd-ate", datapoint);


  let new_image = document.createElement("img");
  new_image.src=  datapoint.drawing;
  new_image.width=500;
  new_image.height = 200;


  // console.log( presented_data[dataPoints[i]].drawing)
  images_container.appendChild(new_image);

  let newinfo = datapoint.identity;
  let newtheTimeStamp = datapoint.timestamp;

  let newdiv_tag = document.createElement("div");
  newdiv_tag.innerHTML=newinfo + " " +newtheTimeStamp;


  newdiv_tag.style.marginTop="95px";
  newdiv_tag.style.marginBottom="95px";
  newdiv_tag.appendChild(info_container);









});
