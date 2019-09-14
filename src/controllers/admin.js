import model from '../database/models'

export default {
  async auth (req, res) {
    const { email, password } = req.body

    try {
      const user = await model.Admin.findOne({ where: { email } })
      if (user) {

      } else {
        res.unauthorized({ message: 'Incorrect email/password combination' })
      }
    } catch (err) {
      console.error(err)

      res.internalServerError()
    }
  }
}
