var express = require('express');
var router = express.Router();
var Product = require('../models/product');

router.get('/', function(req, res, next) {
	products = Product.find(function(err, docs) {
		var productChunks = [];
		var chunkSize = 3;
		for (var i = 0; i < docs.length; i += chunkSize) {
			productChunks.push(docs.slice(i, i + chunkSize));
		}
		res.render('home', { title: 'Home page', products: docs });
	});
	
});

router.get('/category', function (req, res, next) {
	res.render('category', { title: 'Category page' });
});

router.get('/product', function (req, res, next) {
	res.render('product', { title: 'Product page' });
});

module.exports = router;