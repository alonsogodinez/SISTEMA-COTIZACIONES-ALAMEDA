"use strict";

module.exports = (sequelize, DataTypes) => {

    const Customer = sequelize.define("Customer", {
        name: DataTypes.STRING(50),
        address: DataTypes.STRING(50),
        phone: DataTypes.STRING(10),
        cellphone: DataTypes.STRING(20),
        email: DataTypes.STRING(50)
    }, {
        classMethods: {
            associate: (models) => {
                Customer.hasMany(models.Quotation);

                Customer.belongsTo(models.Company, {
                    onDelete: "CASCADE",
                    foreignKey: {
                        allowNull: false
                    }
                });
            }
        }
    });

    return Customer;
};
