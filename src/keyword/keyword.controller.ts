import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

import { CreateKeywordDto } from './dto/create-keyword.dto';
import { UpdateKeywordDto } from './dto/update-keyword.dto';
import { KeywordService } from './keyword.service';

@Controller('keyword')
export class KeywordController {
  constructor(private readonly keywordService: KeywordService) {}

  @Post()
  create(@Body() createKeywordDto: CreateKeywordDto) {
    return this.keywordService.create(createKeywordDto);
  }

  @Get('ks')
  // findAll(@Req() request: Request) {
  findAll() {
    return this.keywordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.keywordService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKeywordDto: UpdateKeywordDto) {
    return this.keywordService.update(+id, updateKeywordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.keywordService.remove(+id);
  }
}
