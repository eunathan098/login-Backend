"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Importações Entities
const UserEntities_1 = __importDefault(require("../entities/UserEntities"));
//Importações Migrations
// import { CreateUsersTable1726330808360 } from "./migrations/1726330808360-CreateUsersTable";
// import { RenameColumnUsers1726336629234 } from "./migrations/1726336629234-RenameColumnUsers";
// import { CreateUsersTable1726336991235 } from "./migrations/1726336991235-CreateUsersTable";
// import { CreateTableUsers1726433292747 } from "./migrations/1726433292747-CreateTableUsers";
const _1726434360741_CreateTabelaUsers_1 = require("./migrations/1726434360741-CreateTabelaUsers");
const PORT = parseInt(process.env.DB_PORT);
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities: [UserEntities_1.default
    ],
    migrations: [
        _1726434360741_CreateTabelaUsers_1.CreateTabelaUsers1726434360741
    ],
});
exports.AppDataSource.initialize()
    .then(() => {
    console.log("Banco de dados conectado com sucesso!");
}).catch((error) => {
    console.error('Erro ao conectar com o Banco', error);
});
