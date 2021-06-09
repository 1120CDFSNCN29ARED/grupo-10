/*const jsonTable = require('../models/jsonTable')
const jsonAtajos = jsonTable('products');*/
let db = require('../database/models');

const productsController = {
  

    //Listado
     'list': (req, res) => {
        db.Product.findAll()
            .then((product) => {
                res.render('../views/products/productList', { product: product });
            });
    },
    
    //Carrito
    'cart': (req, res) => {
        res.render('../views/products/productCart');
    },


    //Detalle
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: [{ association: 'category' }]
        })
            .then((product) => {
                res.render('../views/products/productDetail', { product: product });
            });
    },

    //filtro
    'filter': (req, res) => {
        db.Product.findAll()
            .then((product) => {
                res.render('../views/products/productFilter', { product: product });
            });
    },

    //Creacion
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

    //Edicion    
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

        res.redirect('/product/detail/' + req.params.id);
    },

    //Borrado    
    'delete': (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/product');
    } 
}


module.exports = productsController;