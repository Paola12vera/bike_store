const express = require('express');
const router = express.Router();
const path = require('path');

//multer-subir archivos
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'public/images/products');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });
//   const upload = multer({ storage: storage })
  
// //  requerir los controllers
 const productsController = require('../controllers/productsController');

//Traer todos los productosrouter.get('/', productsController.index); 


// Crear los productos
router.get('/create', productsController.create); 
router.post('/create', productsController.store); 

//Listado de produtos
router.get('/', productsController.listado); 

//Detalle de cada produto
router.get('/:id', productsController.detail); 

// Editar productos
router.get('/edit/:id', productsController.edit); 
router.post('/edit/:id', productsController.update); 


//Borrar un producto
router.get('/delete/:id', productsController.delete); 
router.post('/delete/:id', productsController.delete); 


module.exports = router;
