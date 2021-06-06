/*const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('products');*/
let db = require('../database/models');

const productsController = {
    'detail': (req, res) => {
        res.render('../views/products/productDetail', {producto: producto});
    },
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
    'edit': (req, res) => {
        res.render('../views/products/productEdit', {productoAEditar: productoAEditar});
    },
   
    'editProduct': (req, res) => {

        res.redirect('/product/list');
    },
    'delete': (req, res) => {

        res.redirect('/product/list');
    }
}

module.exports = productsController;