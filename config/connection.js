// import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

//create connection to out database, pass in you MYSQL information for username and password
const sequelize = new Sequelize('just_tech_news_db', 'root', 'lol', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3306
  });
  

module.exports = sequelize;
