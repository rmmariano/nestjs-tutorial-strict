import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('LoggerMiddleware: Request...');
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  const { ip, method, path: url } = req;
  console.log(`logger: ${method} ${ip}${url}`);
  next();
}
