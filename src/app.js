const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
// Requerir las rutas 
const mainRoutes = require("./routes/main");
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users'); 

const app = express();

// view engine setup para usar ejs//
app.set ('views', path.resolve(__dirname,'../views'));
app.set('view engine','ejs');
app.use(express.static('public'));

// Rutas vinculadas 
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

//Levantar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('servidor iniciado en el puerto: ' + port)
});

module.exports = app;










