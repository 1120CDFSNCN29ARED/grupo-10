const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/cart', productsController.cart);

router.get('/filter', productsController.filter);

router.get('/create', productsController.create);
router.post('/create', productsController.createProduct);

router.get('/', productsController.list);

router.get('/:id', productsController.detail);

router.get('/edit/:id', productsController.edit);
router.put('/edit/:id', productsController.updateEdit);

router.post('/delete/:id', productsController.delete);


module.exports = router;