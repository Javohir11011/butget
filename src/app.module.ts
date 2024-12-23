import { Module } from '@nestjs/common';
import { ButgetModule } from './butget/butget.module';

@Module({
  imports: [ButgetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
