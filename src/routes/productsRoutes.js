const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/products', productsController.products);
router.get('/cart', productsController.cart);
router.get('/product/detail', productsController.productDetail);
router.get('/products/form', productsController.productForm);
router.get('/categories', productsController.categories);

module.exports = router;