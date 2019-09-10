import { Router } from 'express'
import user from '../controllers/user'

const route = Router()
route.post('/', user.createUser)

export default route
