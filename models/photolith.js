"use strict";

module.exports = (sequelize, DataTypes) => {
    const Photolith = sequelize.define("Photolith", {
        price: DataTypes.FLOAT,
        quantity: DataTypes.INTEGER
    }, {
        classMethods: {
            associate: (models) => {
                Photolith.belongsTo(models.PhotolithSize, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Photolith;
};

