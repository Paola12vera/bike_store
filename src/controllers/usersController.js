const fs = require('fs');
const path = require('path');
const db = require('../database/models')




const usersController = {
	login: function(req, res){
		db.User.findAll()
			.then(function(usuarios){
				res.render("login",{users:users})
			})
	},
    register: function(req, res){
		db.User.findAll()
			.then(function(usuarios){
				res.render("register",{users:users})
			})
	},
};

module.exports = usersController;