import express from 'express';
const app = express();
import http from 'http';
const server = http.createServer(app);
import { Server } from "socket.io";


// let firebase = require("firebase/app");
// // require("firebase/auth");
// // let getdataBase = require("firebase/database");
//
//
// let firebaseConfig = {
//   apiKey: "AIzaSyA4-JPsien7mQIf9Lv84h4E5ZiVTGDo_i4",
//   authDomain: "kaleido-tower.firebaseapp.com",
//   databaseURL: "https://kaleido-tower-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "kaleido-tower",
//   storageBucket: "kaleido-tower.appspot.com",
//   messagingSenderId: "541923412484",
//   appId: "1:541923412484:web:b53bd977481521cfba0351"
// };
//
// // Initialize Firebase
// let firebaseApp = firebase.initializeApp(firebaseConfig);
// let database = firebaseApp.database();
//
// let drawlistRef = dataBase.ref("drawings");
// drawlistRef.push("testing!!1");
// the following is good practise.
// sensitive infomration can be written into a separate file (e.g. "credentials.js")
// from there it is exported, and in this file we import it.
// then, when uoloaing your code to github you can exclude that file.
// in the root of your repo you will see a file called ".gitignore"
// anything listed in that file will be excluded when pushing things to Github.
// go ahead and write "credentials.js" into the ".gitignore" file.
// I will upload a "credentials-template.js" file to github so you can see what
// the file should look like. rename it to "credentials.js" before you use it.
import { credentials } from './credentials.js'
console.log(credentials)

// // import firebase library:
import { initializeApp } from "firebase/app";
// we are important various firebase methods we will be using
// i import a lot of methods
// recommending:
// "Read and Write Data" (https://firebase.google.com/docs/database/web/read-and-write)
// and "Work with Lists of Data" (https://firebase.google.com/docs/database/web/lists-of-data)
import { getDatabase, get, ref, set, push, onChildAdded, onChildChanged, onChildRemoved } from "firebase/database";


// Your web app's Firebase configuration
const firebaseConfig = credentials;
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
// Create a new rerference -- essentially a key/section on the db
// in this application we can put all our information under the same key
// check your friebase console (after pushing data for the first time)
// to understand better what this means
// from: https://firebase.google.com/docs/database/web/read-and-write
const drawingListRef = ref(database, 'drawings/');


const io = new Server(server);









app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {


  console.log('a user connected', socket.id);

  get(drawingListRef).then((snapshot) => {
    if (snapshot.exists()) {
      let allData = snapshot.val()
      socket.emit("allData", allData)
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

  socket.on("newData",(datapoint)=>{

    const newPostRef = push(drawingListRef);
    set(newPostRef, datapoint);






  })


  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);

  });


});

// whenever a child / datapoint is added to the db, I send it to all the clients
// note, i do this OUTSIDE of the above io.on("connection") bracket beacause
// the stuff in there happens once for every user connected
onChildAdded(drawingListRef, (data) => {
  console.log("NEW DATAPOINT", data.val())
  let datapoint = data.val();
  // console.log("from child", datapoint);
  io.emit("newDrawing", datapoint);
});










server.listen(3000, () => {
  console.log('listening on *:3000');
});
