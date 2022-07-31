const express = require("express");

const controller = require ("../controllers/mainController")

const router = express.Router();

router.get('/', controller.index);
router.get('/login', controller.login);
router.get('/register',controller.register);
router.get('/productDetail',controller.productDetail);

module.exports = router;