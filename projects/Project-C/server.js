const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const admin = require("firebase-admin");


// Fetch the service account key JSON file contents
const serviceAccount = require("./kaleido-tower-firebase-adminsdk-t8ylh-19b7f7c506.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kaleido-tower-default-rtdb.europe-west1.firebasedatabase.app"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var drawingListRef = db.ref("drawings/");
// drawingListRef.push().set("hello")





// const drawingListRef = ref(database, 'drawings/');


// const io = new Server(server);




app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


io.on('connection', (socket) => {


  console.log('a user connected', socket.id);
  drawingListRef.once('value', (data) => {
  // do some stuff once

  console.log(data.val());
  let allData = data.val();
  socket.emit("allData",allData);
});

  // get(drawingListRef).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     let allData = snapshot.val()
  //     socket.emit("allData", allData)
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  socket.on("newData",(datapoint)=>{

    // const newPostRef = push(drawingListRef);
    // set(newPostRef, datapoint);
    drawingListRef.push().set(datapoint);

  })


  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);

  });


});

// whenever a child / datapoint is added to the db, I send it to all the clients
// note, i do this OUTSIDE of the above io.on("connection") bracket beacause
// the stuff in there happens once for every user connected
// onChildAdded(drawingListRef, (data) => {
  // console.log("NEW DATAPOINT", data.val())
  // let datapoint = data.val();
  // console.log("from child", datapoint);
  // io.emit("newDrawing", datapoint);
// });

drawingListRef.on('child_added', (snapshot, prevChildKey) => {
 // const newPost = snapshot.val();
 // console.log('Author: ' + newPost.author);
 // console.log('Title: ' + newPost.title);
 // console.log('Previous Post ID: ' + prevChildKey);
 let datapoint = snapshot.val();
 io.emit("newDrawing", datapoint);
});




server.listen(3000, () => {
  console.log('listening on *:3000');
});
