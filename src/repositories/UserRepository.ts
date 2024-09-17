import { Repository } from 'typeorm';
import  User  from '../entities/UserEntities';
import { AppDataSource } from '../database/data-source'; 

export class UserRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }

    public async userExists(email: string): Promise<boolean> {
        const user = await this.repository.findOneBy({ email });
        return user !== undefined;
    }

    public async saveUser(user: User): Promise<{ status: boolean; message: string }> {
        try {
            await this.repository.save(user);
            return { status: true, message: 'Usuário criado com sucesso.' };
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            return { status: false, message: 'Erro ao criar usuário.' };
        }
    }

    //Login do usuário

    async findByEmail(email: string): Promise<User | null> {
        return await this.repository.findOne({ where: { email } });
    }
}
