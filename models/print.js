"use strict";

module.exports = (sequelize, DataTypes) => {
    const Print = sequelize.define("Print", {
        price: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                Print.belongsTo(models.PrintSize, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Print;
};
