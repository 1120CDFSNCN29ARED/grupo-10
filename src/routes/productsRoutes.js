const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const apiController = require('../controllers/api/apiProductsController');

//Listado de Productos
router.get('/', productsController.list);

//Detalle de Producto
router.get('/detail/:id', productsController.detail);

//Pagina Carrito
router.get('/cart', productsController.cart);

//Pagina Filtrado
router.get('/filter', productsController.filter);

//Creacion de un Producto
router.get('/create', productsController.create);
router.post('/create', productsController.createProduct);

//Edicion de un Producto
router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.updateEdit);

//Borrado de un Producto
router.post('/delete/:id', productsController.delete);

//api
router.get('/api', apiController.list);
router.get('/api/:id', apiController.detail);
router.get('/api/img/:id', apiController.img);



module.exports = router;