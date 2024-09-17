import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameColumnUsers1726336629234 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Renomear as colunas para seguir o padrão snake_case
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "created_At" TO "created_at"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updated_At" TO "updated_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverter as mudanças, se necessário
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "created_at" TO "created_At"`);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updated_at" TO "updated_At"`);
    }


}
