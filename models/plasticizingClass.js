"use strict";

module.exports = (sequelize, DataTypes) => {

    const PlasticizingClass = sequelize.define("PlasticizingClass", {
        name: DataTypes.STRING(30)
    }, {
        classMethods: {
            associate: (models) => {
                PlasticizingClass.hasOne(models.Plasticizing);
            }
        }
    });

    return PlasticizingClass;
};