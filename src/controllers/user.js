import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import response from '../utils/response'
import { genApiKey } from '../utils/apiKey'
import model from '../database/models'

export default {
  async createUser (req, res) {
    const { firstname, lastname, email, password } = req.body
    const passwordHash = bcrypt.hashSync(password, 10)

    const user = await model.User.create({ firstname, lastname, email, password: passwordHash })

    await model.ApiKeys.create({
      userId: user.id,
      apiKey: genApiKey()
    })

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' })

    response(res).created({
      message: 'User has been added',
      data: {
        token,
        user
      }
    })
  }
}
