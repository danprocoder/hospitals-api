import { Router } from 'express'
import validateSignUpField from '../middlewares/validators/signup'
import checkUserToken from '../middlewares/checkUserToken'
import user from '../controllers/user'
import apiKey from '../controllers/keys'

const router = Router()

router.post('/', validateSignUpField, user.createUser)

router.route('/key')
  .all(checkUserToken)
  .get(apiKey.getAllApiKeys)

export default router
