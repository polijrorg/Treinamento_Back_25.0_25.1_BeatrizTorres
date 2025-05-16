import PiusRepository from '../repositories/piusRepository';

class DeletePiuService {
  constructor(private piusRepository: PiusRepository) {}

  execute(id: string): void {
    const piu = this.piusRepository.findById(id);

    if (!piu) {
      throw new Error('Piu não encontrado');
    }

    this.piusRepository.delete(id);
  }
}

export default DeletePiuService;