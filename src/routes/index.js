import { Router } from 'express'
import userRoute from './user'
import hospitalsRoute from './hospitals'
import adminRoutes from './admin'

const route = Router()
route.use('/user', userRoute)
route.use('/hospitals', hospitalsRoute)
route.use('/admin', adminRoutes)

export default route
