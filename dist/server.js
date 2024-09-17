"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors")); // Importe o CORS
const userRouter_1 = __importDefault(require("./routes/userRouter"));
require("./database/data-source");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3030;
// Middleware para habilitar CORS
app.use((0, cors_1.default)()); // Habilita CORS para todas as origens
// Se quiser permitir apenas um domínio específico:
// app.use(cors({ origin: 'http://seu-front-end.com' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get('/', (request, response) => {
    return response.send("Esta página diz: OK");
});
// Uso das Rotas
app.use('/users', userRouter_1.default);
// app.use('/login', );
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
