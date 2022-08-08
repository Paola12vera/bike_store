const express = require("express");

const usersController = require ("../controllers/usersController")

const router = express.Router();

router.get('/login', usersController.login);
router.post('/login', usersController.login);

router.get('/register', usersController.register);
router.post('/register', usersController.register);


module.exports = router;