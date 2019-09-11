import { Router } from 'express'
import userRoute from './user'
import hospitalsRoute from './hospitals'

const route = Router()
route.use('/user', userRoute)
route.use('/hospitals', hospitalsRoute)

export default route
