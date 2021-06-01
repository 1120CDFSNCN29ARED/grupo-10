const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser')

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

const indexRouter = require('./routes/indexRoutes');
const usersRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');




app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false,
}));

app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/users', usersRouter);


app.listen(3005, () => {
    console.log('Servidor corriendo');
});

