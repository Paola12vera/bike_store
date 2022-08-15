const db = require('../database/models')


const controller = {
	index: function(req, res){
		db.Product.findAll()
			.then(function(productos){
				res.render("index",{productos:productos})
			})
	},

}

module.exports = controller;