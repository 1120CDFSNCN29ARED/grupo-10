const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser')
const cors = require('cors');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


const indexRouter = require('./routes/indexRoutes');
const usersRouter = require('./routes/usersRoutes');
const productsRouter = require('./routes/productsRoutes');
const apiRouter = require('./routes/apiRoutes');



app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(methodOverride('_method'));
app.use(cors('*'));

app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false,
}));
app.use(cookies());
/*app.use(userLoggedMiddleware);*/


app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);

app.use((req,res, next)=>{
    res.status(404).render('errorPage');
})


app.listen(3005, () => {
    console.log('Servidor corriendo');
});

