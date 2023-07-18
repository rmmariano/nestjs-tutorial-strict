import { PartialType } from '@nestjs/mapped-types';

import { CreateKeywordDto } from './create-keyword.dto';

export class UpdateKeywordDto extends PartialType(CreateKeywordDto) {}
// export class UpdateKeywordDto extends CreateKeywordDto {}

// The PartialType() function returns a type (class) with all the properties of the input type set to optional.
// https://docs.nestjs.com/openapi/mapped-types#partial
