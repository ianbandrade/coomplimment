import { getCustomRepository } from 'typeorm';
import IUserRequest from '../interfaces/IUserRequest';
import { UsersRepository } from '../repositories/UsersRepository';

export class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) throw new Error('E-mail is null or empty');
    else if (!name) throw new Error('Name is null or empty');

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) throw new Error('User already existis');

    const user = usersRepository.create({
      name,
      email,
      password,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}
