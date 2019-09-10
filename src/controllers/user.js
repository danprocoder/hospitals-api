import response from '../utils/response'

export default {
  createUser (req, res) {
    response(res).created({
      message: 'User has been added'
    })
  }
}
