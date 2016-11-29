"use strict";

module.exports = (sequelize, DataTypes) => {
    const Input = sequelize.define("Input", {
        name: DataTypes.STRING(40),
        price: DataTypes.FLOAT(6,2)
    }, {
        classMethods: {
            associate: (models) => {
                Input.belongsTo(models.QuotationDetail, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Input;
};
