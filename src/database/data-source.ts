import { DataSource } from "typeorm";
import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config()

//Importações Entities

import User from "../entities/UserEntities";

//Importações Migrations

// import { CreateUsersTable1726330808360 } from "./migrations/1726330808360-CreateUsersTable";
// import { RenameColumnUsers1726336629234 } from "./migrations/1726336629234-RenameColumnUsers";
// import { CreateUsersTable1726336991235 } from "./migrations/1726336991235-CreateUsersTable";
// import { CreateTableUsers1726433292747 } from "./migrations/1726433292747-CreateTableUsers";
import { CreateTabelaUsers1726434360741 } from "./migrations/1726434360741-CreateTabelaUsers";

const PORT = parseInt(process.env.DB_PORT as string)
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    logging: true,
    entities:   [ User

    ],
    migrations: [
                  CreateTabelaUsers1726434360741
                 
    ],  
});

AppDataSource.initialize()
                    .then(()=>{
                        console.log("Banco de dados conectado com sucesso!")
                    }).catch ((error)=>{
                        console.error( 'Erro ao conectar com o Banco', error)
                    });