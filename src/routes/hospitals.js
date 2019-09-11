import { Router } from 'express'
import checkApiKey from '../middlewares/checkApiKey'
import hospitalsController from '../controllers/hospitals'

const router = Router()

router.get('/', checkApiKey, hospitalsController.getAll)

export default router
