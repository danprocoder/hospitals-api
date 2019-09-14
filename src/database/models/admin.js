'use strict'

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admins', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {})
  Admin.associate = function (models) {
    // associations can be defined here
  }
  return Admin
}
