import Users from '../models/users';
import UsersRepository from '../repositories/usersRepository';

class UpdateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string, name?: string, email?: string, cpf?: string): Users {
    const user = this.usersRepository.findUserById(id);

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    if (name) user.name = name;
    if (email) user.email = email;
    if (cpf) user.cpf = cpf;

    return user;
  }
}

export default UpdateUserService;
