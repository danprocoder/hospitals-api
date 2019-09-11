import bcrypt from 'bcrypt'
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

    response(res).created({
      message: 'User has been added',
      data: user
    })
  }
}
