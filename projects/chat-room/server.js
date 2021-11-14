let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app);
let { Server } = require("socket.io");
let io = new Server(server);

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
//general event listner for any socket connection
io.on('connection', (socket) => {
  //code inside here is per connection
  //for each connection we console log this
  console.log('a user connected',socket.id);
 //for each connection we establish an event listner for when that connection disconnects
  socket.on('disconnect', () => {
    console.log('user disconnected',socket.id);
  });


  socket.on('message',(data)=>{
    console.log("from server", data);
    io.emit("incoming",data);

  });




});

server.listen(8000, () => {
  console.log('listening on *:8000');
});



/*
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

*/
