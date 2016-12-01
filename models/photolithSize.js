"use strict";

module.exports = (sequelize, DataTypes) => {

    const PhotolithSize = sequelize.define("PhotolithSize", {
        name: DataTypes.STRING(30)
    }, {
        classMethods: {
            associate: (models) => {
                PhotolithSize.hasOne(models.Photolith);
            }
        }
    });

    return PhotolithSize;
};