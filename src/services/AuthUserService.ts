import { getCustomRepository } from 'typeorm';
import IAuthRequest from '../interfaces/IAuthRequest';
import { UsersRepository } from '../repositories/UsersRepository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

export class AuthUserService {
  async execute({ email, password }: IAuthRequest) {
    const EXPIRATION_TOKEN_TIME = '1d';

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findOne({
      email,
    });

    if (!user) throw new Error('User not registered');

    const isCorrectUser = await compare(password, user.password);

    if (!isCorrectUser) throw new Error('E-mail or password incorrects');

    const hash = process.env.MD5_HASH;

    const token = sign(
      {
        email: user.email,
      },
      hash,
      {
        subject: user.id,
        expiresIn: EXPIRATION_TOKEN_TIME,
      }
    );

    return token;
  }
}
