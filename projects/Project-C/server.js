// import { initializeApp } from "firebase/app";
const express = require('express');
const app = express(); //handles routes

const http = require('http'); //...knows how to talk http protocol
const server = http.createServer(app); //create a server and tell it to delegate route hadnling to epress

const { Server } = require("socket.io"); // ...knows how to speak websocket
const io = new Server(server); // create socket server that builds on top of http server

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



app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', (socket) => {


  console.log('a user connected', socket.id);


  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);

  });


});









server.listen(3000, () => {
  console.log('listening on *:3000');
});
