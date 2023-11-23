const Sequelize = require('sequelize');

const sequelize = require('../util/database');  // with these two imported we will now define models that is handled bny sequelize

//define new model by model name first arg is model name , second arg defines structure of models
const Product = sequelize.define('product',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement : true,
    allowNull: false,
    primaryKey: true
  },
  title:Sequelize.STRING,                   //type this is shortcut method of setting type if its the only one required to set
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false
  },
  imageUrl:{
    type: Sequelize.STRING,
    allowNull:false
  },
  description: {
    type:Sequelize.STRING,
    allowNull:false
  }
});

module.exports = Product;