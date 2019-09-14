import { validationResult } from 'express-validator'
import response from '../../utils/response'

export default (message) => (req, res, next) => {
  const errors = validationResult(req).formatWith(({ msg }) => msg)
  if (!errors.isEmpty()) {
    response(res).badRequest({
      message,
      data: {
        errors: errors.mapped()
      }
    })
  } else next()
}
