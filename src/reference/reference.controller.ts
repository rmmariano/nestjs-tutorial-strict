import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('reference')
export class ReferenceController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send();
  }

  //   @Get()
  //   findAll(@Res() res: Response) {
  //     res.status(HttpStatus.CREATED).json([{ message: 'Reference' }]);
  //   }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [{ message: 'Reference' }];
  }
}
