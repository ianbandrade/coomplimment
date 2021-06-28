import { ListTagService } from '../services/ListTagService';
import { Request, Response } from 'express';

export class ListTagController {
  async handle(request: Request, response: Response) {
    const listTagService = new ListTagService();

    const tags = await listTagService.execute();

    return response.json(tags);
  }
}
