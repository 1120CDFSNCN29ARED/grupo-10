const productsController = {
    'products': (req, res) => {
        res.render('../views/products/products');
    },
    'cart': (req, res) => {
        res.render('../views/products/cart');
    },
    'productDetail': (req, res) => {
        res.render('../views/products/productDetail');
    },
    'productCreate': (req, res) => {
        res.render('../views/products/createProduct');
    },
    'productEdit': (req, res) => {
        res.render('../views/products/editProduct');
    },
    'categories': (req, res) => {
        res.render('../views/products/categories');
    },
    'productsDelete': (req, res) => {
        res.render('../views/products/deleteProducts');
    },
    'createProduct': (req, res) => {
        let product = {
            name: req.body.productName,
            description: req.body.description,
            category: req.body.category,
            prize: req.body.prize,
            productImage: req.body.productImage
        };
        res.send(product)
    },
    'editProduct': (req, res) => {
        let product = {
            name: req.body.productName,
            description: req.body.description,
            category: req.body.category,
            prize: req.body.prize,
            productImage: req.body.productImage
        };
        res.send(product)
    },
    'deleteProduct': (req,res) => {
        res.send('hay que hacer algo UwU')
    }

}

module.exports = productsController;