var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shop');

var products = [
	new Product({
		title: 'AjaxQuickCheckout',
		description: 'Very ofigennui module.',
		price: 45,
		image: 'http://image.opencart.com/extension/561923031826f-resize-693x200.jpg'
	}),
	new Product({
		title: 'Social login',   
		description: 'You get all the popular network login buttons in one single module and flexible configuration options.',
		price: 30,
		image: 'http://image.opencart.com/extension/5619571a28a5c-resize-693x200.jpg'
	}),
	new Product({
		title: 'Blog module',
		description: 'The Blog module your have all been waiting for. Feature rich, native opencart blog engine that was specifically developed to seamlessly integrate into your site.',
		price: 25,
		image: ''
	}),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result) {
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}

