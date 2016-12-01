"use strict";

module.exports = (sequelize, DataTypes) => {

    const PrintSize = sequelize.define("PrintSize", {
        name: DataTypes.STRING(30)
    }, {
        classMethods: {
            associate: (models) => {
                PrintSize.hasOne(models.Print);
            }
        }
    });

    return PrintSize;
};