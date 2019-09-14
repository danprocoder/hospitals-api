import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import model from '../database/models'

export default {
  async auth (req, res) {
    const { email, password } = req.body

    try {
      const user = await model.Admins.findOne({ where: { email } })
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          res.success({
            message: 'Login successful',
            data: {
              token: jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })
            }
          })
        } else {
          res.unauthorized({ message: 'Incorrect email/password combination' })
        }
      } else {
        res.unauthorized({ message: 'Incorrect email/password combination' })
      }
    } catch (err) {
      console.error(err)

      res.internalServerError()
    }
  }
}
