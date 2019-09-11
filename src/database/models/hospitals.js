'use strict'

module.exports = (sequelize, DataTypes) => {
  const Hospitals = sequelize.define('Hospitals', {
    name: DataTypes.STRING,
    state: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    address: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {})

  Hospitals.associate = function (models) {
    // associations can be defined here
  }

  return Hospitals
}
