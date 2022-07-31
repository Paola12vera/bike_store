const express = require('express');
const path = require('path');
const mainRoutes = require("./routes/main");

const app = express();
// view engine setup
app.set ('views', path.resolve(__dirname,'../views'));
app.set('view engine','ejs');


app.use(express.static('public'));

app.use('/', mainRoutes);
app.set('views',path.resolve(__dirname,'./views'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('servidor iniciado en el puerto: ' + port)
});










