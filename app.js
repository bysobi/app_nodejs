var express = require('express');
var exphbs  = require('express3-handlebars');
var mongoose = require('mongoose');
var routes = require('./routes/index');

var app = express();

mongoose.connect('mongodb://localhost:27017/shop');

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/static', express.static('public'));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
 
module.exports = app;
app.listen(3000);