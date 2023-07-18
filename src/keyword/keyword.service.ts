import { Injectable } from '@nestjs/common';
import { IKeyword } from './interfaces/keyword.interface';
import { UpdateKeywordDto } from './dto/update-keyword.dto';

@Injectable()
export class KeywordService {
  private readonly keywords: IKeyword[] = [];

  create(keyword: IKeyword) {
    console.log('adds a new keyword: ', keyword);
    this.keywords.push(keyword);
  }

  findAll(): IKeyword[] {
    console.log('returns all keywords: ', this.keywords);
    return this.keywords;
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
