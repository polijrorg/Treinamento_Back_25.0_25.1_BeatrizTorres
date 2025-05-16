import Users from '../models/users';
import UsersRepository from '../repositories/usersRepository';

class GetAllUsersService {
  constructor(private usersRepository: UsersRepository) {}

  public execute(): Users[] {
    const users = this.usersRepository.getAllUsers();
    return users;
  }
}

export default GetAllUsersService;