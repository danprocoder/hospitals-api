'use strict'

const bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Admin', [{
      firstname: 'Daniel',
      lastname: 'Austin',
      email: 'danielaustin718@gmail.com',
      password: bcrypt.hashSync('danielaustin', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
}
