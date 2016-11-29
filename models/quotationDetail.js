"use strict";

module.exports = (sequelize, DataTypes) => {
    const QuotationDetail = sequelize.define("QuotationDetail", {
        quantity: DataTypes.INTEGER,
        subtotal: DataTypes.FLOAT(8,2)
    }, {
        classMethods: {
            associate: (models) => {
                QuotationDetail.hasOne(models.Input, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                QuotationDetail.belongsTo(models.Quotation, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                QuotationDetail.belongsTo(models.Product, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return QuotationDetail;
};
