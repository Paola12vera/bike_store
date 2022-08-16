const db = require('../database/models')
const path = require('path');



const controller = {
	index: function(req, res){
		db.Product.findAll()
			.then(function(products){
				res.render(path.resolve(__dirname, '../views/index'),{products:products})
			})
	},

}

module.exports = controller;