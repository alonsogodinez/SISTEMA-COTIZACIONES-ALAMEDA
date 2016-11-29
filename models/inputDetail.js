"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("QuotationDetail", {
        name: DataTypes.STRING(40),
        price: DataTypes.FLOAT(6,2)
    }, {
        /*classMethods: {
         associate: function (models) {
         InputDetail.hasMany(models.Detail, {
         onDelete: "CASCADE",
         foreignKey: {
         allowNull: false
         }
         });
         }
         }*/
    });
};
