module.exports = function (sequelize, dataTypes){
    
    const alias = 'User_type';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };

    const config = {
        tableName: 'user_type',
        timestamps: false
    };

    const User_type = sequelize.define(alias, cols, config); 

    User_type.associate = function (models) {

        User_type.hasMany(models.User, {
            as: 'users',
            foreignKey: 'user_type_id'
        });
    };

    return User_type;
}