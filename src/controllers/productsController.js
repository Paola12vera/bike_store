const fs = require('fs');
const path = require('path');





const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products');
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		res.render('detail');
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
			let image = 'default-image.png';
			if (req.file) {
				image = req.file.filename;
			}
			const newProduct = {
				
				...req.body,
				price: parseInt(req.body.price),
				discount: parseInt(req.body.discount),
				image
			};
			//TO-DO:aqui se va implementar la creacion del producto en la base de datos
			res.redirect('/products');
		},


	// Update - Form to edit
	edit: (req, res) => {
		res.render('product-edit-form');
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;