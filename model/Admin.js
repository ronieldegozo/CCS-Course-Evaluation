const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Admin = sequelize.define('admin', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true  
  },
  fname:{
    type: Sequelize.TEXT,
    allowNull: false
  },
  lname: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

});

module.exports = Admin;
