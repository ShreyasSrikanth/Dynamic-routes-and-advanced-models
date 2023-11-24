const Sequelize = require('sequelize');

const sequelize = require('../util/database');  

const userCart = sequelize.define('userCart',{
    id:{
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull: false,
    primaryKey: true
    },
    name:Sequelize.STRING,
    email:Sequelize.STRING
});

module.exports = userCart;