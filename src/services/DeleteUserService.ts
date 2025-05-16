import UsersRepository from '../repositories/usersRepository';

class DeleteUserService {
  constructor(private usersRepository: UsersRepository) {}

  public execute(id: string): void {
    this.usersRepository.deleteById(id);
  }
}

export default DeleteUserService;