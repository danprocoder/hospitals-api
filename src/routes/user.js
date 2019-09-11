import { Router } from 'express'
import validateSignUpField from '../middlewares/validators/signup'
import user from '../controllers/user'

const route = Router()
route.post('/', validateSignUpField, user.createUser)

export default route
