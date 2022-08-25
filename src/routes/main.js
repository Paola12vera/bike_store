const express = require("express");

const mainController = require ("../controllers/mainController")

const router = express.Router();

router.get('/', mainController.index);
router.get('/shopping/:id', mainController.shoppingCart);


module.exports = router;