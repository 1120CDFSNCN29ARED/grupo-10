let db = require('../database/models');

const indexController = {
    
    //Home
    'index': (req, res) => {

        db.Product.findAll()
            .then((product) => {
                res.render('home', { user: req.session.userLogged, product: product });
            });
        
    }
}

module.exports = indexController;