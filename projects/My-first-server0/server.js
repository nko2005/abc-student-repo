console.log("hello world");
const express = require('express')
const app = express()
// const port = 3000
const port = process.env.PORT;
const riddle1="ship";
const riddle2="console";
const riddle3="joker"
const riddle4 ="riddler"
app.use(express.static("public"));

app.get('/riddle', (req, res) => {
  console.log("we are here");
  console.log(req);
  // res.send("The wind carries me to and fro bringing people goods they know")
  let query = req.query;
  let guess = query.word;
  console.log(query);
  if(guess.toLowerCase()==riddle1){
    res.redirect('/console/riddle-2.html');
  }
})

app.get('/riddle2', (req, res) => {
  console.log("we are here");
  console.log(req);
  // res.send("The wind carries me to and fro bringing people goods they know")
  let query = req.query;
  let guess = query.word;
  console.log(query);
  if(guess.toLowerCase()==riddle2){
    res.redirect('/joker/riddle-3.html');
  }
})


app.get('/riddle3', (req, res) => {
  console.log("we are here");
  console.log(req);
  // res.send("The wind carries me to and fro bringing people goods they know")
  let query = req.query;
  let guess = query.word;
  console.log(query);
  if(guess.toLowerCase()==riddle3){
    res.redirect('/mysteries/riddle-4.html');
  }
})

app.get('/riddle4', (req, res) => {
  console.log("we are here");
  console.log(req);
  // res.send("The wind carries me to and fro bringing people goods they know")
  let query = req.query;
  let guess = query.word;
  console.log(query);
  if(guess.toLowerCase()==riddle4 || guess.toLowerCase() =="mysteries"){
    res.redirect('/riddler');
  }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


/*

app.get('/ship', (req, res) => {
  res.send("I am a developer's best friend, heeding my warnings will help you make amends.")
})
app.get('/console', (req, res) => {
  res.send("He is the prince of crime to Gotham folk, but the bat can't seem to take his joke.")
})
app.get('/joker', (req, res) => {
  res.send("I perplex people with great increase, some may call me \"Mr.Reese\".")
})

app.get('/mysteries', (req, res) => {
  res.send("You have solved the riddle!")
})
app.get('/riddler', (req, res) => {
  res.send("You have solved the riddle!")
})
*/
