var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Home21112!');
	console.log("hello");
});

app.get('/home', function (req, res) {
  res.send('Home!');
});

app.get('/category', function (req, res) {
  res.send('category!');
});

app.get('/product', function (req, res) {
  res.send('product!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});