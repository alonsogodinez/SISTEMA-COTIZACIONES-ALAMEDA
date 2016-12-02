"use strict";

module.exports = (sequelize, DataTypes) => {

  const PaperSize = sequelize.define("PaperSize", {
    name: DataTypes.STRING(30)
  }, {
    classMethods: {
      associate: (models) => {
        PaperSize.hasOne(models.Paper);
      }
    }
  });

  return PaperSize;
};