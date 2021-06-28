import { getCustomRepository } from 'typeorm';
import ITagRequest from '../interfaces/ITagRequest';
import { TagsRepository } from '../repositories/TagsRepository';

export class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepository);

    if (!name) throw new Error('Name is null or empty');

    name = name.toUpperCase();

    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) throw new Error('Tag already exists');

    const tag = tagsRepository.create({
      name,
    });

    await tagsRepository.save(tag);

    return tag;
  }
}
