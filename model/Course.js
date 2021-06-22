const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Course = sequelize.define('course', {

  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true  
  },
  course:{
    type: Sequelize.STRING,
    allowNull: false
  },


});

module.exports = Course;
