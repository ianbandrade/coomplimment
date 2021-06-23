import { CreateTagService } from '../services/CreateTagService';
import { Request, Response } from 'express';

export class CreateTagController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createTagService = new CreateTagService();

    const user = await createTagService.exceute({
      name,
    });

    return response.json(user);
  }
}