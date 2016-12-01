"use strict";

module.exports = (sequelize, DataTypes) => {
    const Plasticizing = sequelize.define("Plasticizing", {
        price: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                Plasticizing.belongsTo(models.PlasticizingClass, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });

                Plasticizing.belongsTo(models.PlasticizingSize, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Plasticizing;
};

