require('dotenv').config()

module.exports = {
  development: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'mysql',
    operatorsAliases: false
  }
}
