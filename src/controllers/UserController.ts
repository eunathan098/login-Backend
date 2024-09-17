import { Request, Response } from 'express';
import { UserService } from '../services/UserServices';
import  User  from '../entities/UserEntities'; 

export class UserController {

    public async createUser(req: Request, res: Response): Promise<Response> {
        const userServices = new UserService()
        const { name, email, phone, password } = req.body;

        console.log(req.body)

        //se não tiver os campos
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ status: false, message: 'Todos os campos são obrigatórios.' });
        }

        // Verificar se o usuário já existe
        // const userExists = await userServices.userExists(email);
        // if (userExists) {
        //     return res.status(409).json({ status: false, message: 'Usuário já existe.' });
        // }

        // Criar e salvar o novo usuário
        const userEntity = new User();
        userEntity.name = name;
        userEntity.email = email;
        userEntity.phone = phone;
        userEntity.password = password; // A senha será hasheada no serviço

        const result = await userServices.saveUser(userEntity);

        return res.status(result.status ? 201 : 400).json({ status: result.status, message: result.message });
    }

    //Login do Usuário

    public async loginUser(req: Request, res: Response): Promise<Response> {
        const userService = new UserService()
        const { email, password } = req.body;

        console.log(`este e o que estou recebendo: ${req.body}`)

        const result = await userService.loginUser(email, password);

        if (!result.status) {
            return res.status(400).json({ status: false, message: result.message });
        }

        return res.status(200).json({ status: true, message: result.message });
    }
}
