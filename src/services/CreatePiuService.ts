import PiusRepository from '../repositories/piusRepository';

interface IRequest {
  id: string;
  user_id: string;
  content: string;
  created_at: Date;
}

class CreatePiuService {
  constructor(private piusRepository: PiusRepository) {}

  public execute({ id, user_id, content, created_at }: IRequest) {
    if (!user_id || !content) {
      throw new Error('User ID and content are required');
    }
    const piu = this.piusRepository.create({ id, user_id, content, created_at });
    return piu;
  }
}

export default CreatePiuService;
