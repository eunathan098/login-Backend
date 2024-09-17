import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController()

//Rotas
router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
// router.post('/logout', userController.logoutUser)

export default router;