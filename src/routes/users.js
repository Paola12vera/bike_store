const express = require("express");

const usersController = require ("../controllers/usersController")

const router = express.Router();

router.get('/login', usersController.login);
router.get('/register', usersController.register);


router.get('/create', usersController.create);
router.post('/create', usersController.store);

router.get('/edit/:id', usersController.edit); 
router.post('/edit/:id', usersController.update); 

router.get('/delete/:id', usersController.delete); 
router.post('/delete/:id', usersController.delete); 

module.exports = router;