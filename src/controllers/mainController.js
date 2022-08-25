const db = require('../database/models')
const path = require('path');



const controller = {
	index: function(req, res){
		db.Product.findAll()
			.then(function(products){
				res.render(path.resolve(__dirname, '../views/index'),{products:products})
			})
	},
	shoppingCart: (req, res)=> {
		db.Product.findByPk(req.params.id, {
				include: [{	association: "color"}]
			})
			.then(function (products) {
				res.render(path.resolve(__dirname, "../views/shoppingCart"), {
					products: products
				})
			})
	},
	}

module.exports = controller;