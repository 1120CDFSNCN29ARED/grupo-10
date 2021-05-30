const jsonTable = require('../database/jsonTable')
const jsonAtajos = jsonTable('products');

const productsController = {
    'detail': (req, res) => {
        let producto = jsonAtajos.find(req.params.id);

        res.render('../views/products/productDetail', {producto: producto});
    },
    'cart': (req, res) => {
        res.render('../views/products/productCart');
    },
    'filter': (req, res) => {
        let productos = jsonAtajos.readFile('products');
        res.render('../views/products/productFilter', {productos: productos})
    },
    'create': (req, res) => {
        res.render('../views/products/productCreate')
    },
    'edit': (req, res) => {
        res.render('../views/products/productEdit')
    },
    'createProduct': (req, res) => {
        let product= req.body;
        productId = jsonAtajos.create(product);

        res.redirect('/product/create');
    },
    'editProduct': (req, res) => {
        let IdToDelete =   req.body.id; 
        jsonAtajos.delete(IdToDelete);

        res.redirect('/product/list');
    }   ,
    'list': (req, res) => {
        let productos = jsonAtajos.readFile('products');
        res.render('../views/products/productList', {productos: productos})
    },
    'delete': (req, res) => {
        let IdToDelete =   req.body.id; 
        jsonAtajos.delete(IdToDelete);

        res.redirect('/product/list');
    }
}

module.exports = productsController;