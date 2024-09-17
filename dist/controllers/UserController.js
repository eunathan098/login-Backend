"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserServices_1 = require("../services/UserServices");
const UserEntities_1 = __importDefault(require("../entities/UserEntities"));
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userServices = new UserServices_1.UserService();
            const { name, email, phone, password } = req.body;
            console.log(req.body);
            //se não tiver os campos
            if (!name || !email || !phone || !password) {
                return res.status(400).json({ status: false, message: 'Todos os campos são obrigatórios.' });
            }
            // Verificar se o usuário já existe
            // const userExists = await userServices.userExists(email);
            // if (userExists) {
            //     return res.status(409).json({ status: false, message: 'Usuário já existe.' });
            // }
            // Criar e salvar o novo usuário
            const userEntity = new UserEntities_1.default();
            userEntity.name = name;
            userEntity.email = email;
            userEntity.phone = phone;
            userEntity.password = password; // A senha será hasheada no serviço
            const result = yield userServices.saveUser(userEntity);
            return res.status(result.status ? 201 : 400).json({ status: result.status, message: result.message });
        });
    }
    //Login do Usuário
    loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserServices_1.UserService();
            const { email, password } = req.body;
            console.log(`este e o que estou recebendo: ${req.body}`);
            const result = yield userService.loginUser(email, password);
            if (!result.status) {
                return res.status(400).json({ status: false, message: result.message });
            }
            return res.status(200).json({ status: true, message: result.message });
        });
    }
}
exports.UserController = UserController;
