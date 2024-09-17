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
exports.UserRepository = void 0;
const UserEntities_1 = __importDefault(require("../entities/UserEntities"));
const data_source_1 = require("../database/data-source");
class UserRepository {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(UserEntities_1.default);
    }
    userExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.repository.findOneBy({ email });
            return user !== undefined;
        });
    }
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.save(user);
                return { status: true, message: 'Usuário criado com sucesso.' };
            }
            catch (error) {
                console.error('Erro ao salvar usuário:', error);
                return { status: false, message: 'Erro ao criar usuário.' };
            }
        });
    }
    //Login do usuário
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.findOne({ where: { email } });
        });
    }
}
exports.UserRepository = UserRepository;
