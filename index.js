var express = require('express');
var app = express();
app.set('title', 'My Site');
app.get('title');
app.get('/', function (req, res) {
  res.send('Home page');

});

app.get('/category', function (req, res) {
  res.send('Category page');
});

app.get('/product', function (req, res) {
  res.send('Product page');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});