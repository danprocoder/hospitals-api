import { body, check } from 'express-validator'
import checkValidationFails from './checkValidationFails'
import model from '../../database/models'

export default [
  check('firstname')
    .exists()
    .withMessage('Firstname is required')
    .isAlpha()
    .withMessage('Firstname can only contain alphabetic characters'),
  check('lastname')
    .exists()
    .withMessage('Lastname is required')
    .isAlpha()
    .withMessage('Lastname can only contain alphabetic characters'),
  check('email')
    .exists()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Email address provided is not valid'),
  body('email')
    .custom(email => {
      return model.User.findOne({
        where: { email }
      }).then(user => {
        if (user) {
          throw new Error('Username already used by another user')
        }

        return true
      })
    }),
  check('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters'),
  checkValidationFails
]
