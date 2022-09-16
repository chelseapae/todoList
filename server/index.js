require("dotenv").config();
const express = require('express');
const app = express();
const db = require('./db.js')

app.use(express.json());
//**remember this line of code
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({ extended: false }))

app.post('/todoList', function (req, res) {
  console.log('POST BODY', req.body.word)
  return db.saveTodo(req.body.word)
    .then((data)=> {
      res.status(201, data)
    })
    .catch((err) => {
      console.log(err)
      res.status(404, 'post failed')
    })
});

app.get('/todoList', function (req, res) {
  return db.getList()
  .then(data => {
    res.status(201).send(data)
  })
  .catch((err) => {
    console.log(err)
    res.send('get failed')
  })
});


app.delete('/todoList', function (req, res) {
  return db.deleteWord(req.body.word)
    .then((data) => {
      res.status(204).send(data);

    })
    .catch((err => {
      console.log(err)
    }))
});

app.listen(process.env.PORT, function() {
  console.log(`listening on port ${process.env.PORT}`);
});
