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
exports.UserService = void 0;
const UserRepository_1 = require("../repositories/UserRepository");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserService {
    userExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new UserRepository_1.UserRepository();
            return yield userRepository.userExists(email);
        });
    }
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new UserRepository_1.UserRepository();
            try {
                user.password = yield bcrypt_1.default.hash(user.password, 10); // Hashing da senha
                return yield userRepository.saveUser(user);
            }
            catch (error) {
                console.error('Erro ao salvar usuário:', error);
                return { status: false, message: 'Erro ao criar usuário.' };
            }
        });
    }
    //Login do Usuário
    loginUser(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = new UserRepository_1.UserRepository();
            const user = yield userRepository.findByEmail(email);
            if (!user) {
                return { status: false, message: "Usuário não encontrado" };
            }
            const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
            if (!passwordMatch) {
                return { status: false, message: "Senha incorreta" };
            }
            return { status: true, message: "Login bem-sucedido" };
        });
    }
}
exports.UserService = UserService;
