import { getCustomRepository } from 'typeorm';
import { IUserAuthInfo } from '../interfaces/IUserRequest';
import { ComplimentsRepository } from '../repositories/ComplimentsRepository';

export class ListUserReceivedComplimentsService {
  async execute({ user_id }: IUserAuthInfo) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);

    const compliments = await complimentsRepository.find({
      where: {
        user_receiver: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}
