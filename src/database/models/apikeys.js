'use strict'
module.exports = (sequelize, DataTypes) => {
  const ApiKeys = sequelize.define('ApiKeys', {
    userId: DataTypes.INTEGER,
    apiKey: DataTypes.STRING,
    project: {
      type: DataTypes.STRING,
      defaultValue: 'Default'
    }
  }, {})
  ApiKeys.associate = function (models) {
    // associations can be defined here
  }
  return ApiKeys
}
