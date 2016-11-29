"use strict";

module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("Product", {
        name: DataTypes.STRING(50)
    }, {
        classMethods: {
            associate: (models) => {
                Product.belongsTo(models.QuotationDetail, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Product;
};
