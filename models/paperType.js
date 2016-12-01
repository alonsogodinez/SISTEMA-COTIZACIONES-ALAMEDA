"use strict";

module.exports = (sequelize, DataTypes) => {

    const PaperType = sequelize.define("PaperType", {
        name: DataTypes.STRING(30)
    }, {
        classMethods: {
            associate: (models) => {
                PaperType.hasOne(models.Paper);
            }
        }
    });

    return PaperType;
};