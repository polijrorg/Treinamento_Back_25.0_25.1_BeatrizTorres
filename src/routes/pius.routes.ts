import { Router, Request, Response } from 'express';
import { v4 as uuid } from 'uuid';

import PiusRepository from '../repositories/PiusRepository';
import CreatePiuService from '../services/CreatePiuService';
import GetAllPiusService from '../services/GetAllPiusService';
import DeletePiuService from '../services/DeletePiuService';

const piusRouter = Router();
export const piusRepository = new PiusRepository();

piusRouter.post('/', (request: Request, response: Response) => {
  try {
    const { user_id, content } = request.body;

    const createPiu = new CreatePiuService(piusRepository);

    const piu = createPiu.execute({
      id: uuid(),
      user_id,
      content,
      created_at: new Date(),
    });

    return response.status(201).json(piu);
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
});

piusRouter.get('/', (request: Request, response: Response) => {
  try {
    const getAllPius = new GetAllPiusService(piusRepository);
    const pius = getAllPius.execute();

    return response.json(pius);
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
});

piusRouter.delete('/:id', (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const deletePiu = new DeletePiuService(piusRepository);
    deletePiu.execute(id);

    return response.status(204).send();
  } catch (error: any) {
    return response.status(400).json({ error: error.message });
  }
});

export default piusRouter;
