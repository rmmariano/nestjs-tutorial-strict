import {
  BadRequestException, // HttpException,
  // HttpStatus,
  Injectable,
} from '@nestjs/common';

import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { IKeyword } from './interfaces/keyword.interface';

@Injectable()
export class KeywordService {
  private readonly keywords: IKeyword[] = [];

  create(keyword: IKeyword) {
    console.log('adds a new keyword: ', keyword);
    this.keywords.push(keyword);
  }

  findAll(): IKeyword[] {
    try {
      return this.keywords;
    } catch (error) {
      // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
      // throw new HttpException(
      //   {
      //     status: HttpStatus.FORBIDDEN,
      //     error: 'This is a custom message',
      //   },
      //   HttpStatus.FORBIDDEN,
      //   {
      //     cause: error,
      //   },
      // );
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'Some error description',
      });
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} keyword`;
  }

  update(id: number, keywordDTO: UpdateKeywordDto) {
    console.log('update keywordDTO', keywordDTO);
    return `This action updates a #${id} keyword`;
  }

  remove(id: number) {
    return `This action removes a #${id} keyword`;
  }
}
