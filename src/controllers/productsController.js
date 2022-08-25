const fs = require('fs');
const path = require('path');
const db = require('../database/models')



const productsController = {
	//Crear producto
	create: (req, res)=> {
		db.Color.findAll()
			.then(function (colors) {
				return res.render(path.resolve(__dirname, "../views/create"), {colors: colors})
			})
	},
	//guardar producto
		  
	store: (req, res) => {
	db.Product.create({
	name: req.body.name,
	description: req.body.description,
	price: req.body.price,
	colors_id: req.body.colors
	});
	res.redirect('/products');
	}, 

	// listado de productos 
	listado: (req, res)=> {
		db.Product.findAll()
			.then(function (products) {
				res.render(path.resolve(__dirname, "../views/listadoDeProductos"), {products: products})
			})
	},


	// Detalle de productos 
	detail: (req, res)=> {
		db.Product.findByPk(req.params.id, {
				include: [{	association: "color"}]
			})
			.then(function (products) {
				res.render(path.resolve(__dirname, "../views/productDetail"), {
					products: products
				})
			})
	},

	// Editar productos
	edit: (req, res)=> {
		let pedidoProductos = db.Product.findByPk(req.params.id)
		let pedidoColores = db.Color.findAll();

		Promise.all([pedidoProductos, pedidoColores])
			.then(function ([products, colors]) {
				res.render(path.resolve(__dirname, "../views/edit"), {
					products: products,
					colors: colors
				});
			})
	},

	// Actualizar
	update: (req, res)=> {
		db.Product.update({
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			colors_id: req.body.color
		}, {
			where: {
				id: req.params.id
			}
		});
		res.redirect("/products/" + req.params.id)
	},

	// Borrar productos
	delete: (req, res)=> {
		db.Product.destroy({
				where: {
					id: req.params.id
				}
			}),
			res.redirect("/products")
	}
};

module.exports = productsController;