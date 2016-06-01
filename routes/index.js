var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Home page' });
});

router.get('/category', function (req, res, next) {
	res.render('category', { title: 'Category page' });
});

router.get('/product', function (req, res, next) {
	res.render('product', { title: 'Product page' });
});

module.exports = router;