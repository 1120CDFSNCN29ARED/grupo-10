module.exports = function (sequelize, dataTypes) {

    const alias = 'Product_cart';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER(100)
        },
        cart_id: {
            type: dataTypes.INTEGER(100)
        }
    };

    const config = {
        tableName: 'product_cart',
        timestamps: false
    };

    const Product_cart = sequelize.define(alias, cols, config);

    return Product_cart;
}