import Users from '../models/users';

interface ICreateUserDTO {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

class UsersRepository {
  private users: Users[] = [];

  constructor() {
    this.users = [];
  }

  public findUserByCPF(cpf: string): Users | undefined {
    return this.users.find((user: Users) => user.cpf === cpf);
  }

  public findUserByEmail(email: string): Users | undefined {
    return this.users.find((user: Users) => user.email === email);
  }

  public findUserById(id: string): Users | undefined {
    return this.users.find((user: Users) => user.id === id);
  }

  public create(data: ICreateUserDTO): Users {
    const user = new Users(data);
    this.users.push(user);
    return user;
  }

  public getAllUsers(): Users[] {
    return this.users;
  }

  public updateUser(id: string, name: string, email: string, cpf: string): Users | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return undefined;
    }

    const updatedUser = {
      ...this.users[userIndex],
      name,
      email,
      cpf,
    };

    this.users[userIndex] = updatedUser;

    return updatedUser;
  }
  public deleteById(id: string): void {
  const userIndex = this.users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    throw new Error('User not found');
  }

  this.users.splice(userIndex, 1);
}
}

export default UsersRepository;
