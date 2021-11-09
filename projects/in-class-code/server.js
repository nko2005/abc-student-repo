console.log("hello world");
const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
let counter =0;
app.get('/add', (req, res) => {
  counter++;
  console.log("someone added 1", counter);


})
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
