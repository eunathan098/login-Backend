"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const router = (0, express_1.Router)();
const userController = new UserController_1.UserController();
//Rotas
router.post('/create', userController.createUser);
router.post('/login', userController.loginUser);
// router.post('/logout', userController.logoutUser)
exports.default = router;
