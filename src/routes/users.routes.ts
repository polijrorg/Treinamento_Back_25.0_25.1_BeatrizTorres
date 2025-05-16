import { Router, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import usersRepository from '../repositories/usersRepository';
import CreateUserService from '../services/CreateUsersService';
import GetAllUsersService from '../services/GetAllUsersService';
import GetOneUserService from '../services/GetOneUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

const usersRouter = Router();
export const userRepository = new usersRepository();

// Rota de criação de usuário
usersRouter.post('/', (request: Request, response: Response) => {
    try {
        const { name, email, cpf } = request.body;

        if (!name || !email || !cpf) {
            return response.status(400).json({ error: 'Envie todos os campos' });
        }

        const createUser = new CreateUserService(userRepository);

        const user = createUser.execute({ 
            id: uuid(),
            name, 
            email,
            cpf
        });

        return response.json(user);
    } catch(e: any) {
        return response.status(400).json({ error: e.message });
    }
});

// Rota de leitura de todos os usuários
usersRouter.get('/', (request: Request, response: Response) => {
    try {
        const getAllUsers = new GetAllUsersService(userRepository);
        const users = getAllUsers.execute();
        return response.json(users);
    } catch (error: any) {
        return response.status(400).json({ error: error.message });
    }
});

// Rota de leitura de um usuário
usersRouter.get('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const getUser = new GetOneUserService(userRepository);

    const user = getUser.execute(id);

    return response.json(user);
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
});

// Rota de atualização de um usuário
usersRouter.patch('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { name, email, cpf } = request.body;

    const updateUser = new UpdateUserService(userRepository);
    const user = updateUser.execute(id, name, email, cpf);

    return response.json(user);
  } catch (e: any) {
    return response.status(400).json({ error: e.message });
  }
});
//Rota de exclusão de um usuário
usersRouter.delete('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const deleteUser = new DeleteUserService(userRepository);
    deleteUser.execute(id);

    return response.status(204).send(); // 204 No Content
  } catch (e: any) {
    return response.status(400).json({ error: e.message });
  }
});

export default usersRouter;