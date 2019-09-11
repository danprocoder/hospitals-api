import { check } from 'express-validator'
import checkValidationFails from './checkValidationFails'

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
  check('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password should be at least 8 characters'),
  checkValidationFails
]
