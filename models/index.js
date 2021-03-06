"use strict";




const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";

//passwords changed in config.json after this commit
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];

let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}


const db = {};

fs
    .readdirSync(__dirname)
    .filter( (file) =>{
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach( (file) =>{
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach( (modelName) => {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;