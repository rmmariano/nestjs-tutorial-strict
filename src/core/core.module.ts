import { Global, Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';

@Global()
@Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}

// Modules can export their internal providers. In addition, they can re-export modules that
//  they import. In the example, the CommonModule is both imported into and exported
// from the CoreModule, making it available for other modules which import this one.
// https://docs.nestjs.com/modules#module-re-exporting

// When you want to provide a set of providers which should be available everywhere
// out-of-the-box(e.g., helpers, database connections, etc.),
// make the module global with the @Global() decorator.
// The @Global() decorator makes the module global-scoped.Global modules
// should be registered only once, generally by the root or core module.
// https://docs.nestjs.com/modules#global-modules
