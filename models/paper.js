"use strict";

module.exports = (sequelize, DataTypes) => {
    const Paper = sequelize.define("Paper", {
        price: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                Paper.belongsTo(models.PaperType, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                Paper.belongsTo(models.PaperSize, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Paper;
};
