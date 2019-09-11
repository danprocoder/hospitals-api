import model from '../database/models'
import response from '../utils/response'

export default {
  async getAll (req, res) {
    const hospitals = await model.Hospitals.findAll({
      attributes: ['name', 'address', 'state', 'lat', 'lng', 'phone']
    })
    const total = await model.Hospitals.count()

    response(res).success({
      message: `${hospitals.length} of ${total} total record${total ? 's' : ''}`,
      data: hospitals
    })
  }
}
