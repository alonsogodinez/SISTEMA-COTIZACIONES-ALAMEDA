"use strict";

module.exports = (sequelize, DataTypes) => {

    const PlasticizingSize = sequelize.define("PlasticizingSize", {
        name: DataTypes.STRING(30)
    }, {
        classMethods: {
            associate: (models) => {
                PlasticizingSize.hasOne(models.Plasticizing);
            }
        }
    });

    return PlasticizingSize;
};