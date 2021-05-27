const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');

//llamado de rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');
const contactRouter = require('./routes/contactRoutes');

// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use(usersRouter);
app.use(productsRouter);
app.use(contactRouter);

app.use((req, res, next) => {
    res.status(404).render('error')
})


app.listen( 3005, () => {
    console.log('Servidor corriendo');
});


