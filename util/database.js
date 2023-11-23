const Sequelize = require('sequelize');           // import the sequelize lib

//in sequelize class pass an argument that is the schema name in sql workbench and root username and password dialect is the type of sql we are using for us in this case it is mysql
const sequelize = new Sequelize('node-complete','root','root' , {
    dialect: 'mysql' , 
    host:'localhost'
});

module.exports = sequelize;