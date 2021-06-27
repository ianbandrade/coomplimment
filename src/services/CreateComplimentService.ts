import { getCustomRepository } from 'typeorm';
import IComplimentRequest from '../interfaces/IComplimentRequest';
import { ComplimentsRepository } from '../repositories/ComplimentsRepository';
import { UsersRepository } from '../repositories/UsersRepository';

export class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);

    if (user_sender === user_receiver)
      throw new Error('Impossible to send a compliment to yourself');

    const userReceiverExists = await usersRepository.findOne(user_receiver);

    if (!userReceiverExists) throw new Error('Receiver not found');

    const compliment = complimentsRepository.create({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    await complimentsRepository.save(compliment);

    return compliment;
  }
}
