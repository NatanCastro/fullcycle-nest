import { Module } from '@nestjs/common';
import { AssetsService } from './asset.service';
import { AssetsController } from './asset.controller';

@Module({
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
