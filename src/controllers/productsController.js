const fs = require('fs');
const path = require('path');
const db = require('../database/models')




const productsController = {
	//Crear producto
	create: function(req, res){
		db.Product.findAll()
			.then(function(productos){
				return res.render("create",{productos:productos})
			},
			{include: [{association:"category"}, {association:"color"}]
			})
	},
	//guardar producto
	store: function (req, res) {
	db.Product.create({
	
	name: req.body.name,
	description: req.body.description,
	price: req.body.price,
	image: req.file.image,
	categories_id:req.body.category,
	colors_id:req.body.color
	});
res.redirect('/products');
	// let image = 'default-image.png';
	// 	if (req.file) {
	// 		image = req.file.filename;
	// 	}
	 
	},
	// listado de productos 
	listado: function(req, res){
		db.Product.findAll()
			.then(function(productos){
				res.render("listadoDeProductos",{productos:productos})
			})
	},


	// Detalle de productos 
	detail: function(req, res){
		db.Product.findByPk(req.params.id,{
			include: [{association:"category"}, {association:"color"}]
		})
			.then(function(productos){
				 res.render("productDetail",{productos:productos})
			})
	},

	// Editar productos
	edit: function (req, res){
		let pedidoProductos= db.Product.findByPk(req.params.id)
		let pedidoCategorias= db.Category.findAll();
		let pedidoColores= db.Color.findAll();

		Promise.all([pedidoProductos, pedidoCategorias, pedidoColores])
			.then(function([productos, categorias, colores]){
				res.render("edit",{productos:productos, categorias:categorias, colores:colores});
			})
	},


	// Actualizar
	update: function(req, res){
		db.Product.update({
	
			name: req.body.name,
			description: req.body.description,
			price: req.body.price,
			image: req.file.image,
			categories_id:req.body.category,
			colors_id:req.body.color
			},{
				wehere: {
					id: req.params.id
				}	
			});
			res.redirect("/products/"+req.params.id)
	},

	// Borrar productos
	delete :function (req, res) {
		db.Product.destroy({
			where:{
				id: req.params.id
			}
		}),
		res.redirect("/products")
	}
};

module.exports = productsController;