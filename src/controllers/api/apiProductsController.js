const db = require('../../database/models');
const path = require("path");
const imageFilePath = path.join(__dirname, "../public/img/Product-Images/");

module.exports = {
    list: (req, res) => {

        db.Product.findAll({ attributes: ["id", "name", "description", "category_id"] })
            .then((products) => {
                db.Category.findAll()
                    .then((categories) => {
                        categories.forEach(category => {
                            category.dataValues.total = 0
                            products.forEach((product, i) => {
                                if (product.category_id == category.id) {
                                    category.dataValues.total += 1;
                                }
                            });
                        });

                        products.forEach(product => {
                            product.dataValues.url = `http://localhost:3005/product/api/${product.id}`
                        });

                        return res.status(200).json({
                            total: products.length,
                            totalCategorias: {
                                resmas: categories[0].dataValues.total,
                                eq_oficina: categories[1].dataValues.total,
                                merch: categories[2].dataValues.total,
                                libreria: categories[3].dataValues.total,
                            },
                            data: products,
                            status: 200,
                        })
                    })
            })
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then((product) => {
                product.dataValues.img_url = `http://localhost:3005/product/api/img/${product.id}`;
                res.status(200).json({
                    data: product,
                    status: 200
                })
            })
    },

    img: (req, res) => {
        db.Product.findByPk(req.params.id, { attributes: ["product_img"] })
            .then((productImg) => {
                let image = imageFilePath + productImg.dataValues.product_img;
                res.status(200).send(image);
            })
    }


}