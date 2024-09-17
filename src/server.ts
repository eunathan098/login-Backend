import express, { Request, Response } from "express";
import dotenv from 'dotenv';
import cors from 'cors'; // Importe o CORS
import userRouters from './routes/userRouter';
import './database/data-source';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3030;

// Middleware para habilitar CORS
app.use(cors()); // Habilita CORS para todas as origens
// Se quiser permitir apenas um domínio específico:
// app.use(cors({ origin: 'http://seu-front-end.com' }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (request: Request, response: Response) => {
    return response.send("Esta página diz: OK");
});

// Uso das Rotas
app.use('/users', userRouters);
// app.use('/login', );

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
