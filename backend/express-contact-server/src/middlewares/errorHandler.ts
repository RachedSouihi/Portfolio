import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};

export default errorHandler;