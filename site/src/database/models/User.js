const Cart = require("./Cart");

module.exports = function (sequelize, dataTypes) {

    const alias = 'User';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.STRING(35),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(35),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(60),
            allowNull: false
        },
        nickname: {
            type: dataTypes.STRING(35),
            allowNull: false
        },
        profile_img: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(35),
            allowNull: false
        },
        user_type_id:{
            type: dataTypes.INTEGER
        },
        location_id: {
            type: dataTypes.INTEGER
        }

    };

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {

        User.belongsTo(models.User_type, {
            as: 'user_type',
            foreignKey: 'user_type_id'
        });

        User.belongsTo(models.Location, {
            as: 'location',
            foreignKey: 'location_id'
        });

        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'user_id'
        });
    }

    return User;
}