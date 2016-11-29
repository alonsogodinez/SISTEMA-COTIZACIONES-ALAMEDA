"use strict";

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("Input", {
        name: DataTypes.STRING(40),
        price: DataTypes.FLOAT(6,2)
    }, {
        /*classMethods: {
            associate: function (models) {
                Input.belongsTo(models.QuotationDetail, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }*/
    });
};
