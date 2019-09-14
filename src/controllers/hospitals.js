import model from '../database/models'

export default {
  async getAll (req, res) {
    const hospitals = await model.Hospitals.findAll({
      attributes: ['name', 'address', 'state', 'lat', 'lng', 'phone']
    })
    const total = await model.Hospitals.count()

    res.success({
      message: `${hospitals.length} of ${total} total record${total ? 's' : ''}`,
      data: hospitals
    })
  },

  async addNew (req, res) {
    const { name, address, state, lng, lat, phone } = req.body

    const hospital = await model.Hospitals.create({
      name, address, state, lng, lat, phone
    })
    res.created({
      message: 'New hospital created successfully',
      data: {
        hospital
      }
    })
  }
}
