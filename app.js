var express = require('express');
var exphbs  = require('express3-handlebars');

var routes = require('./routes/index');

var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/static', express.static('public'));

app.use('/', routes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000);