import UsersRepository from '../repositories/usersRepository';
import Users from '../models/users';

class GetOneUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute(id: string): Users {
    const user = this.usersRepository.findUserById(id); // Nome correto aqui

    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    return user;
  }
}

export default GetOneUserService;
