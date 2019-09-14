import model from '../database/models'

export default {
  async getAllApiKeys (req, res) {
    const { id } = req.user

    try {
      const result = await model.ApiKeys.findAll({
        where: { userId: id }
      })
      res.success({ data: result })
    } catch (error) {
      console.error(error)
      res.internalServerError()
    }
  }
}
