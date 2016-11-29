"use strict";

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define("Company", {
        name: DataTypes.STRING(40),
        ruc: DataTypes.STRING(11),
        web: DataTypes.STRING(40),
        facebook: DataTypes.STRING(50),
        twitter: DataTypes.STRING(50),
        price: DataTypes.FLOAT(6,2)
    }, {
        classMethods: {
            associate: (models) => {
                Company.hasOne(models.Customer);
            }
        }
    });

    return Company;
};
