module.exports = function (sequelize, dataTypes) {

    const alias = 'Category';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(35),
            allowNull: false
        }
    };

    const config = {
        tableName: 'category',
        timestamps: false
    };

    const Category = sequelize.define(alias, cols, config);

    return Category;
}