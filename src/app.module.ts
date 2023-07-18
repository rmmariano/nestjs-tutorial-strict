import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeywordModule } from './keyword/keyword.module';
import { ReferenceController } from './reference/reference.controller';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, KeywordModule],
  controllers: [AppController, ReferenceController],
  providers: [AppService],
})
export class AppModule {}
