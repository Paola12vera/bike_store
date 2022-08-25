const fs = require('fs');
const path = require('path');
const db = require('../database/models')




const usersController = {
	login: function(req, res){
		db.User.findAll()
			.then(function(users){
				res.render(path.resolve(__dirname, "../views/login"),{users:users})
			})
	},
    register: function(req, res){
		db.User.findAll()
			.then(function(users){
				res.render(path.resolve(__dirname, "../views/register"),{users:users})
			})
	},
	create: (req, res)=> {
		db.Role.findAll()
			.then(function (roles) {
				return res.render(path.resolve(__dirname, "../views/createUser"), {roles: roles})
			})
	},
	//guardar usuario
	store: async (req, res) => {
			  try {
				user = await db.Product.create({
				  firstName: req.body.nombre,
				  lastName:req.body.apellido,
				  email:req.body.email,
				  password: req.body.password,
				  roles_id: req.body.roles,
						});
			  } catch (error) {
				console.error(error);
			} 
			res.redirect('/');
		  },
		  
	// listado de usuarios 
	listado: (req, res)=> {
		db.Product.findAll()
			.then(function (users) {
				res.render(path.resolve(__dirname, "../views/listadoDeUsuariios"), {users: users})
			})
	},


	// Detalle de productos 
	detail: (req, res)=> {
		db.Product.findByPk(req.params.id, {
				include: [{	association: "role"}]
			})
			.then(function (users) {
				res.render(path.resolve(__dirname, "../views/userDetail"), {
					users: users
				})
			})
	},

	// Editar usuarios
	edit: (req, res)=> {
		let pedidoUsers = db.User.findByPk(req.params.id)
		let pedidoRoles = db.Role.findAll();

		Promise.all([pedidoUsers, pedidoRoles])
			.then(function ([users, roles]) {
				res.render(path.resolve(__dirname, "../views/editUser"), {
					users: users,
					roles: roles
				});
			})
	},

	// Actualizar
	update: (req, res)=> {
		db.User.update({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			password: req.body.password,
			roles_id: req.body.role
		}, {
			where: {
				id: req.params.id
			}
		});
		res.redirect("//" + req.params.id)
	},

	// Borrar usuario
	delete: (req, res)=> {
		db.User.destroy({
				where: {
					id: req.params.id
				}
			}),
			res.redirect("/")
	}
};

module.exports = usersController;