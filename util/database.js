const Sequelize = require('sequelize');

const sequelize = new Sequelize('ccs_evaluation', 'root', 'Roniel061617', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
