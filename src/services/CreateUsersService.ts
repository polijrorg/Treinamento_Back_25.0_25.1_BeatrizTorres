
import UsersRepository from '../repositories/usersRepository';

interface IRequest {
    id: string;
    name: string;
    email: string;
    cpf: string;
}

class CreateUserService {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }
    public execute(data: IRequest){
        const userwithCPF = this.usersRepository.findUserByCPF(data.cpf);
        if(userwithCPF){
            throw Error('CPF já existe');
        }
        const userwithemail = this.usersRepository.findUserByEmail(data.email);
        if(userwithemail){
            throw Error('Email já existe');
        }
        const user = this.usersRepository.create(data);
        return user;
        
    }
}

export default CreateUserService;