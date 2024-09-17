import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: "varchar", length: 255 })
    name: string;

    @Column({ type: "varchar", length: 255, unique: true })
    email: string;

    @Column({ type: "varchar", length: 20 })
    phone: string;

    @Column({ type: "varchar", length: 255 })
    password: string;

    @CreateDateColumn({ name: 'created_at' }) // Nome da coluna no banco de dados
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at' }) // Nome da coluna no banco de dados
    updated_at: Date;

    // Relacionamentos

}

export default User;
