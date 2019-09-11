import { validationResult } from 'express-validator'
import response from '../../utils/response'

export default (req, res, next) => {
  const errors = validationResult(req).formatWith(({ msg }) => msg)
  if (!errors.isEmpty()) {
    response(res).badRequest({
      message: 'Unable to create user account',
      data: {
        errors: errors.mapped()
      }
    })
  } else next()
}
