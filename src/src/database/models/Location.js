module.exports = function (sequelize, dataTypes) {

    const alias = 'Location';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: dataTypes.STRING(40)
        },
        street_number: {
            type: dataTypes.INTEGER
        },
        flat: {
            type: dataTypes.INTEGER
        },
        postal_code: {
            type: dataTypes.INTEGER
        },
        locality: {
            type: dataTypes.STRING(40)
        },
        state: {
            type: dataTypes.STRING(40)
        },
        country: {
            type: dataTypes.STRING(40)
        }
    };

    const config = {
        tableName: 'location',
        timestamps: false
    };

    const Location = sequelize.define(alias, cols, config);

    Location.associate = function (models) {

        Location.hasMany(models.User, {
            as: 'users',
            foreignKey: 'location_id'
        });
    };

    return Location;
}