"use strict";

module.exports = (sequelize, DataTypes) => {    const Plate = sequelize.define("Plate", {
        price: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                Plate.belongsTo(models.PlateSize, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Plate;
};
