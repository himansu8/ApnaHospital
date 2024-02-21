import express from "express"
import { receptionistSignup, receptionistLogin,singleReceptionistData,allReceptionistData,deleteReceptionist,updateReceptionist} from "../controllers/Reception_controller.js"
import {middleWare, isDoctor, isDean} from "../middlewares/auth.verifyMiddleWare.js"

const routes = express.Router()

routes.post('/signup',isDoctor,receptionistSignup)
routes.post('/login',receptionistLogin)
routes.get('/:referenceNo',isDoctor,singleReceptionistData)
routes.get('/',isDoctor, allReceptionistData );
routes.delete('/:referenceNo',isDoctor,deleteReceptionist)
routes.patch('/:referenceNo',isDoctor,updateReceptionist)

export default routes