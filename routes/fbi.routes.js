import { Router } from "express";
import { fbiController } from "../controllers/fbi.controller.js";
import { verifyTokenJWT } from "../middlewares/jwt.middleware.js";

const router = Router()

// app.use('/api', fbiRoutes)

router.post('/login', fbiController.loginAgent)
router.get('/perfil', verifyTokenJWT, fbiController.profileAgent)  

export default router
