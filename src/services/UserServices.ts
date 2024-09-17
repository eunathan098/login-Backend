import  User  from '../entities/UserEntities';
import { UserRepository } from '../repositories/UserRepository';
import bcrypt from 'bcrypt';

export class UserService {
    
    public async userExists(email: string): Promise<boolean> {

        const userRepository = new UserRepository()
        return await userRepository.userExists(email);
    }

    public async saveUser(user: User): Promise<{ status: boolean; message: string }> {
        const userRepository = new UserRepository()
        try {
            user.password = await bcrypt.hash(user.password, 10); // Hashing da senha
            return await userRepository.saveUser(user);
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            return { status: false, message: 'Erro ao criar usuário.' };
        }
    }

    //Login do Usuário

    public async loginUser(email: string, password: string): Promise<{status: boolean, message: string}> {
        const userRepository = new UserRepository()
        const user = await userRepository.findByEmail(email);

        if (!user) {
            return { status: false, message: "Usuário não encontrado" };
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return { status: false, message: "Senha incorreta" };
        }

        return { status: true, message: "Login bem-sucedido" };
    }
}
