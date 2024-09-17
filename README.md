# Project

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm run dev:start` command

### Instructions
## Migrations
1. npm run typeorm migration:create src/database/migrations/CreateUsersTable
2. npm run typeorm migration:run -- -d ./src/database/data-source.ts 
3. npm run typeorm migration:revert -- -d ./src/database/data-source.ts  // reverte apenas a ultima migração
4. npm run typeorm migration:show -- -d ./src/database/data-source.ts

## Prod 
1. npx ts-node ./node_modules/typeorm/cli.js migration:run -d ./src/database/data-source.ts

## Comandos SQL
## SELECT * = seleciona todos 
SELECT * (NOME DA TABELA) ou em * (Nome da Coluna);
## CREATE TABLE = Cria nova tabela
CREATE TABLE (nome da tabela)
## INSERT INTO (TABELA) VALUES ( '..'..')
insert into (Nome da tabela) VALUES ( valores a preencher a tabela)




