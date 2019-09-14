import { Router } from 'express'
import createHospitalValidator from '../middlewares/validators/createHospital'
import checkApiKey from '../middlewares/checkApiKey'
import checkAdminToken from '../middlewares/checkAdminToken'
import hospitalsController from '../controllers/hospitals'

const router = Router()

router.route('/')
  .get(checkApiKey, hospitalsController.getAll)
  .post(checkAdminToken, createHospitalValidator, hospitalsController.addNew)

export default router
