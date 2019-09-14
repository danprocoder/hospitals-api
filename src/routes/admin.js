import { Router } from 'express'
import adminController from '../controllers/admin'

const router = new Router()

router.post('/auth', adminController.auth)

export default router
