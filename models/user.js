"use strict";

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        cellphone: DataTypes.STRING,
        dni: DataTypes.STRING(8)
    }, {
        classMethods: {
            associate: (models) => {
                User.hasMany(models.Task);
                User.hasMany(models.Company);
            }
        }
    });
    return User;
};