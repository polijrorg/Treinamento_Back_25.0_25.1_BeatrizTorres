import Piu from '../models/piu';

interface ICreatePiuDTO {
  id: string;
  user_id: string;
  content: string;
  created_at: Date;
}

class PiusRepository {
  private pius: Piu[] = [];

  constructor() {
    this.pius = [];
  }

  public create(data: ICreatePiuDTO): Piu {
    const piu = new Piu(data);
    this.pius.push(piu);
    return piu;
  }

  public getAll(): Piu[] {
    return this.pius;
  }

  public findById(id: string): Piu | undefined {
    return this.pius.find(piu => piu.id === id);
  }

  public delete(id: string): void {
    this.pius = this.pius.filter(piu => piu.id !== id);
  }
}

export default PiusRepository;
