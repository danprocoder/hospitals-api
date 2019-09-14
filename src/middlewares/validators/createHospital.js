import { check } from 'express-validator'
import checkValidationFails from './checkValidationFails'

export default [
  check('name')
    .exists().withMessage('Hospital name is required'),

  check('address')
    .exists().withMessage('Hospital address is required'),

  check('state')
    .exists().withMessage('Hospital state is required'),

  check('lat').optional()
    .isNumeric().withMessage('Latitude is not valid')
    .custom(lat => {
      if (lat < -90 || lat > 90) throw new Error('Latitude must be between -90 and 90')

      return true
    }),

  check('lng').optional()
    .isNumeric().withMessage('Longitude is not valid')
    .custom(lng => {
      if (lng < -180 || lng > 180) throw new Error('Longitude must be between -180 and 180')

      return true
    }),

  check('phone').optional(),

  checkValidationFails('Unable to create new hospital')
]
