const express = require ('express');
const router = express.Router();

const apiProductsController = require('../controllers/api/apiProductsController');
const apiUsersController = require('../controllers/api/apiUsersController');

//api
router.get('/products', apiProductsController.list);
router.get('/products/:id', apiProductsController.detail);
router.get('/products/img/:id', apiProductsController.img);


//api
router.get('/users', apiUsersController.list);
router.get('/users/:id', apiUsersController.detail);
router.get('/users/img/:id', apiUsersController.img);

module.exports = router;