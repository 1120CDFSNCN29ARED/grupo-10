const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/products', productsController.products);
router.get('/cart', productsController.cart);
router.get('/product/detail', productsController.productDetail);
router.get('/products/createProduct', productsController.productCreate);
router.post('/products/createProduct', productsController.createProduct)
router.get('/products/editProduct', productsController.productEdit);
router.put('/products/editProduct', productsController.editProduct)
router.get('/categories', productsController.categories);
router.get('/products/deleteProducts', productsController.productsDelete);
router.delete('/products/deleteProducts', productsController.deleteProduct);



module.exports = router;