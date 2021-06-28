import { getCustomRepository } from 'typeorm';
import { IUserAuthInfo } from '../interfaces/IUserRequest';
import { ComplimentsRepository } from '../repositories/ComplimentsRepository';

export class ListUserSentComplimentsService {
  async execute({ user_id }: IUserAuthInfo) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}
