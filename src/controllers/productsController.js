/*const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('products');*/
let db = require('../database/models');

const productsController = {
    
    'cart': (req, res) => {
        res.render('../views/products/productCart');
    },
    'filter': (req, res) => {
        res.render('../views/products/productFilter', {productos: productos})
    },

    'create': (req, res) => {
        db.Category.findAll()
            .then((category) => {
                res.render('../views/products/productCreate', {category: category});
            })
    },

    'createProduct': (req, res) => {
        db.Product.create({
            name: req.body.productname ,
            description: req.body.description ,
            product_img: req.body.productImage ,
            price: req.body.prize ,
            category_id: req.body.category
        })

        res.redirect('/product');
    },

    'list': (req, res) => {
        db.Product.findAll()
            .then( (product) => {
                 res.render('../views/products/productList', {product: product});
            });
        
    },

    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{association: 'category'}]
        })
            .then((product) => {
                res.render('../views/products/productDetail', {product: product});
            });
        
    },
    'edit': (req, res) => {
        let productReq = db.Product.findByPk(req.params.id);
        let categoryReq = db.Category.findAll();
        
        Promise.all([productReq, categoryReq])
            .then(([product, category]) => {
                res.render('../views/products/productEdit', { product: product, category: category });
            })
    },
   
    'updateEdit': (req, res) => {
        db.Product.update({
            name: req.body.productname,
            description: req.body.description,
            product_img: req.body.productImage,
            price: req.body.prize,
            category_id: req.body.category
        }, {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/product/' + req.params.id);
    },
    'delete': (req, res) => {

        res.redirect('/product/list');
    }
}

module.exports = productsController;