"use strict";

module.exports = (sequelize, DataTypes) => {
    const Quotation = sequelize.define("Quotation", {
        name: DataTypes.STRING(50),
        position: DataTypes.STRING(40),
        personName: DataTypes.STRING(50)
    }, {
        classMethods: {
            associate:  (models) =>{
                Quotation.belongsTo(models.User, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                Quotation.hasMany(models.QuotationDetail);

                Quotation.belongsTo(models.Customer, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: true
                    }
                });
            }
        }
    });

    return Quotation;
};
