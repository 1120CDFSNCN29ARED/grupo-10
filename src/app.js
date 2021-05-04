const express = require('express');
const path = require('path');
const app = express();

//llamado de rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/', indexRouter);
app.use(usersRouter);
app.use(productsRouter);



app.listen(3005, () => {
    console.log('Servidor corriendo');
});