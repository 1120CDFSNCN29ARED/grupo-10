module.exports = function (sequelize, dataTypes) {

    const alias = 'Product';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(75),
            allowNull: false
        },
        description: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        product_img: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(100)
        }
    };

    const config = {
        tableName: 'products',
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {

        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        });

        Product.hasMany(models.Product_cart, {
            as: 'product_cart',
            foreignKey: 'product_id'
        });
    };

    return Product;
}