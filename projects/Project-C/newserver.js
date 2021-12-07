onst express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);




// Fetch the service account key JSON file contents
var serviceAccount = require("path/to/serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databaseName.firebaseio.com"
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});







const drawingListRef = ref(database, 'drawings/');


// const io = new Server(server);









app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });


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
  // console.log("NEW DATAPOINT", data.val())
  let datapoint = data.val();
  // console.log("from child", datapoint);
  io.emit("newDrawing", datapoint);
});










server.listen(3000, () => {
  console.log('listening on *:3000');
});
