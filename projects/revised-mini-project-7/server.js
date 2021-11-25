const express = require('express');
const app = express(); //handles routes

const http = require('http'); //...knows how to talk http protocol
const server = http.createServer(app); //create a server and tell it to delegate route hadnling to epress

const { Server } = require("socket.io"); // ...knows how to speak websocket
const io = new Server(server); // create socket server that builds on top of http server
let count =0;
let data = {value: count};


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


// app.get('/', (req, res) => {
//   res.send('<h1>Hello world!?</h1>');
// });

// this event will be fired when a client
// connects via socket
io.on('connection', (socket) => {
  // all we want to do with the client, we need to do in here.

  console.log('a user connected', socket.id);
  data.value+=1;
  console.log(data);
  io.emit("incoming",data);
  console.log("total user count is:", data.value);


  // socket.on('chatMessage', (msg) => {
    // console.log('message: ' + msg);

    // sends message to all clients:
    // io.emit('updatedClients', count);





  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    data.value-=1;
      io.emit("incoming",data);
    console.log("total user count now is:",   data.value)
  });


});






server.listen(3000, () => {
  console.log('listening on *:3000');
});
