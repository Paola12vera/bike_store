const express = require("express");

const controller = require ("./controllers/mainController.js");

const router = express.Router();

router.get('/', controller.index);
router.get('/shopping', controller.shoppingCart);

module.exports = router;