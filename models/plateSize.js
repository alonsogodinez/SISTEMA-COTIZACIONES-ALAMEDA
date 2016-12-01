"use strict";

module.exports = (sequelize, DataTypes) => {

    const PlateSize = sequelize.define("PlateSize", {
        name: DataTypes.STRING(30)
    }, {
        classMethods: {
            associate: (models) => {
                PlateSize.hasOne(models.Plate);
            }
        }
    });

    return PlateSize;
};