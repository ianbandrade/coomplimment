import { getCustomRepository } from 'typeorm';
import IUserRequest from '../interfaces/IUserRequest';
import { UsersRepository } from '../repositories/UsersRepository';

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) throw new Error('Incorret e-mail');

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) throw new Error('User already existis');

    const user = usersRepository.create({
      name,
      email,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}
