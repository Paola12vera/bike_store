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
};

module.exports = usersController;