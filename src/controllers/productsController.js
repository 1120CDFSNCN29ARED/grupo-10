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
        res.render('../views/products/productForm');
    },
    'categories': (req, res) => {
        res.render('../views/products/categories');
    }

}

module.exports = productsController;