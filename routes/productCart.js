var express = require('express');
var router = express.Router();


router.get('/product-cart', (req, res,) => {
    res.render('productCart');
});

module.exports = router;