import response from '../utils/response'
import model from '../database/models'

export default (req, res, next) => {
  const apiKey = req.headers['access-token']
  if (!apiKey) {
    response(res).forbidden({ message: 'Your API key is required' })
  } else {
    model.ApiKeys.findOne({
      where: { apiKey }
    }).then(result => {
      if (!result) {
        response(res).forbidden({ message: 'The API key you supplied does not exists' })
      } else {
        req.apiKey = result
        next()
      }
    })
  }
}
