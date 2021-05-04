const path = require('path');

const productsController = {
    'index': (req, res) => {
        res.render('productsIndex.ejs');
    }

}

module.exports = productsController;