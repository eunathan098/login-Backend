import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTabelaUsers1726434360741 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
          `CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255)NOT NULL,
            email varchar(255)NOT NULL,
            phone VARCHAR(20)NOT NULL,
            password VARCHAR(255)NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP
            )`
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE users");
      }

}
