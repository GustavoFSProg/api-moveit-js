import { Router } from 'express'
import multer from 'multer'
import userController from './controllers/userController'
import uploadConfig from './config/uploadConfig'

const route = Router()

const upload = multer(uploadConfig)

route.get('/', userController.getAll)
route.post('/register', upload.single('image'), userController.registerUser)

export default route
