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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenameColumnUsers1726336629234 = void 0;
class RenameColumnUsers1726336629234 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // Renomear as colunas para seguir o padrão snake_case
            yield queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "created_At" TO "created_at"`);
            yield queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updated_At" TO "updated_at"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // Reverter as mudanças, se necessário
            yield queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "created_at" TO "created_At"`);
            yield queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "updated_at" TO "updated_At"`);
        });
    }
}
exports.RenameColumnUsers1726336629234 = RenameColumnUsers1726336629234;
