import { Module } from '@nestjs/common';
import { ThatersService } from './thaters.service';
import { ThatersController } from './thaters.controller';

@Module({
  controllers: [ThatersController],
  providers: [ThatersService]
})
export class ThatersModule {}
