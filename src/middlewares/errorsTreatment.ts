import { Request, Response, NextFunction } from 'express';

export const errorsTreatment = (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => {
  return err instanceof Error
    ? response.status(400).json({
        error: err.message,
      })
    : response.status(500).json({
        error: 'error',
        message: 'Internal server error',
      });
};
