let socket = io();
let images_container = document.getElementById("drawings-container");
// console.log(images_container);
let presented_data = {};
socket.on("allData",(allData)=>{

  console.log(allData);
  presented_data=allData;
  let dataPoints = Object.keys(presented_data);
  for(let i=0; i<dataPoints.length;i++){

      let image = document.createElement("img");
      image.src=  presented_data[dataPoints[i]].drawing;
      image.width=1200;
      image.height = 600;


      // console.log( presented_data[dataPoints[i]].drawing)
      images_container.appendChild(image);



  }











});

socket.on("newDrawing",(datapoint)=>{
  // console.log("from server on databse upd-ate", datapoint);


  let new_image = document.createElement("img");
  new_image.src=  datapoint.drawing;
  new_image.width=1200;
  new_image.height = 600;


  // console.log( presented_data[dataPoints[i]].drawing)
  images_container.appendChild(new_image);









});
