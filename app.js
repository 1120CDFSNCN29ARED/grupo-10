const express = require('express');
const path = require('path');
const app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const staticFolder = path.resolve(__dirname, './public');
app.use(express.static(staticFolder));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
;

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;

port = 3005;

app.listen(port, () => {
    console.log('Servidor corriendo');
});


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.ejs'));
});

app.get('/product-cart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productCart.ejs'));
});

app.get('/product-detail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productDetail.ejs'));
});

app.get('/register-login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register-login.ejs'));
});