const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/detail/:id', productsController.detail);

router.get('/cart', productsController.cart);

router.get('/filter', productsController.filter);

router.get('/create', productsController.create);
router.post('/create', productsController.createProduct);

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.editProduct);

router.get('/list', productsController.list);
router.delete('/list', productsController.delete);


module.exports = router;