import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { IEnsureAuthPayload } from '../interfaces/IAuthRequest';

export const ensureAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const BEARER: string = 'Bearer';
  const authToken: string = request.headers.authorization;
  var token: string;

  if (!authToken)
    return response.status(401).json({
      message: 'Missing Bearer token',
    });

  if (authToken.includes(BEARER)) [, token] = authToken.split(' ');
  else token = authToken;

  const hash = process.env.MD5_HASH;

  try {
    const { sub } = verify(token, hash) as IEnsureAuthPayload;
    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).json({ message: 'Invalid token' });
  }
};
