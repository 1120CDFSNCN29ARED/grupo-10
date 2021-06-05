module.exports = function (sequelize, dataTypes) {

    const alias = 'Cart';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER(100),
        },
        total_price: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        total_items: {
            type: dataTypes.INTEGER(50),
            allowNull: false
        }
    };

    const config = {
        tableName: 'cart',
        timestamps: false
    };
    
    const Cart = sequelize.define(alias, cols, config);

    return Cart;
}