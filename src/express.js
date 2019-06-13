var express = require('express');
const bodyParser = require("body-parser");
var router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@localhost:32781/admin', { useNewUrlParser: true });

var carSchema = new mongoose.Schema({
  carId: Number,
  user: String,
  name: String,
});

var Cars = mongoose.model('CarsList', carSchema);

let count = 0;

/* GET home page. */
router.get('/', function (req, res, next) {
  Cars.find({ name: /.+/ }, (error, cars) => {
    res.render('index', { title: 'Express', cars });
  });
});
router.post('/', function (req, res, next) {
  // console.log(req.body.name);

  var silence = new Cars({ name: req.body.name });
  silence.save((error, el) => {
    res.render('saveSuccess', { name: req.body.name, title: 'Saved!' });
  });
});

app.post("/submit", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  response.send(`${request.body.userName} - ${request.body.userAge}`);
});

router.get('/submit', function (req, res, next) {
  var toyota = new Cars({
    carId: 0,
    user: request.body.userName,
    name: request.body.comment,
  });

  toyota.save((error, el) => {
    res.json(toyota);;
  });
});

module.exports = router;


// router.get('/comments/:carId', function (req, res, next) {
//   Cars.find({ name: new RegExp(req.params.carId) }, (error, car) => {
//     res.json({ car });
//   });
// });



// app.get("/submit", urlencodedParser, function (request, response) {
//   response.sendFile(__dirname + "/SubmitForm.html");
// });


// const express = require("express");
// const bodyParser = require("body-parser");

// var app = express();

// const cars = [
//   {
//     id: 0,
//     name: 'Toyota',
//     model: 'Corolla',
//   },
//   {
//     id: 1,
//     name: 'BMW',
//     model: 'M5',
//   },
//   {
//     id: 3,
//     name: 'Mercedes-Benz',
//     model: 'W222',
//   },
// ];

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.get("/register", urlencodedParser, function (request, response) {
//   response.sendFile(__dirname + "/register.html");
// });
// app.post("/register", urlencodedParser, function (request, response) {
//   if (!request.body) return response.sendStatus(400);
//   response.send(`${request.body.userName} - ${request.body.userAge}`);
// });

// app.get("/", function (request, response) {
//   response.send("Главная страница");
// });

// app.listen(3003, function () {
//   console.log('Example app listening on port 3003!');
// });