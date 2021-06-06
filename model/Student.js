const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Student = sequelize.define('student', {

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
  cnumber:{
    type: Sequelize.BIGINT,
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
  status:{
    type: Sequelize.STRING,
    defaultValue: 'inactive'
  }

});

module.exports = Student;
