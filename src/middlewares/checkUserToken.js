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
      model.User.findOne({ where: { id: userId } })
        .then(user => {
          if (!user) {
            return res.authorization({ message: 'Authorization token is not valid' })
          }
          req.user = user
          next()
        })
        .catch((err) => {
          console.error('Error in checkUserToken', err)
          res.internalServerError()
        })
    } catch (err) {
      res.unauthorized({ message: 'Authorization token is not valid' })
    }
  }
}
