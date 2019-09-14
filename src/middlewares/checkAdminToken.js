import jwt from 'jsonwebtoken'
import model from '../database/models'

export default (req, res, next) => {
  const { authorization } = req.headers

  if (!authorization) {
    res.unauthorized({ message: 'Authorization token is required' })
  } else if (!/^Bearer [a-zA-Z0-9./=\-_+]+$/.test(authorization)) {
    res.unauthorized({ message: 'Authorization token is not valid' })
  } else {
    try {
      const { userId } = jwt.verify(authorization.split(' ')[1], process.env.JWT_SECRET_KEY)
      model.Admins.findOne({ where: { id: userId } })
        .then(user => {
          if (!user) {
            res.unauthorized({ message: 'Authorization token is not valid' })
          } else {
            req.admin = user
            next()
          }
        })
        .catch(err => {
          console.error(err)

          res.internalServerError()
        })
    } catch (err) {
      res.unauthorized({ message: 'Authorization token is not valid' })
    }
  }
}
