import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { CoreModule } from './core/core.module';
import { KeywordModule } from './keyword/keyword.module';
import { ReferenceController } from './reference/reference.controller';

@Module({
  imports: [CoreModule, KeywordModule],
  controllers: [AppController, ReferenceController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('cats');
  }
}
