import { Module } from '@nestjs/common';
import { ButgetService } from './ButgetService';
import { ButgetController } from './butget.controller';

@Module({
  controllers: [ButgetController],
  providers: [ButgetService],
})
export class ButgetModule {}
