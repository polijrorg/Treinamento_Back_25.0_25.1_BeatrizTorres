import PiusRepository from '../repositories/piusRepository';
import Piu from '../models/piu';

class GetAllPiusService {
  private piusRepository: PiusRepository;

  constructor(piusRepository: PiusRepository) {
    this.piusRepository = piusRepository;
  }

  public execute(): Piu[] {
    const pius = this.piusRepository.getAll();
    return pius;
  }
}

export default GetAllPiusService;