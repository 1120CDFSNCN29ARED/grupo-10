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
    'productForm': (req, res) => {
        res.render('../views/products/createProduct');
    },
    'categories': (req, res) => {
        res.render('../views/products/categories');
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
    }

}

module.exports = productsController;