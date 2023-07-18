import {
  MiddlewareConsumer,
  Module,
  NestModule, // RequestMethod,
} from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  LoggerMiddleware, // logger,
} from './common/middleware/logger.middleware';
import { CoreModule } from './core/core.module';
import { KeywordController } from './keyword/keyword.controller';
import { KeywordModule } from './keyword/keyword.module';
import { ReferenceController } from './reference/reference.controller';

@Module({
  imports: [CoreModule, KeywordModule],
  controllers: [AppController, ReferenceController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('keyword');

    // consumer
    //   .apply(LoggerMiddleware)
    //   .forRoutes({ path: 'keyword', method: RequestMethod.GET });

    consumer.apply(LoggerMiddleware).forRoutes(KeywordController);

    // consumer.apply(logger).forRoutes(KeywordController);
  }
}
