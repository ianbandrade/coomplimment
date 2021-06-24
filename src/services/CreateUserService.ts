import { getCustomRepository } from 'typeorm';
import IUserRequest from '../interfaces/IUserRequest';
import { UsersRepository } from '../repositories/UsersRepository';
import { hash } from 'bcryptjs';

export class CreateUserService {
  async execute({ name, email, admin, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    if (!email) throw new Error('E-mail is null or empty');
    else if (!name) throw new Error('Name is null or empty');

    const userAlreadyExists = await usersRepository.findOne({ email });

    if (userAlreadyExists) throw new Error('User already existis');

    const encryptedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: encryptedPassword,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}
