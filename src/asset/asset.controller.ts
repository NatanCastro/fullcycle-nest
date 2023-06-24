import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssetsService } from './asset.service';
import { CreateAssetDto } from './dto/create.dto';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @Get()
  findAll() {
    return this.assetsService.listAll();
  }

  @Post()
  create(@Body() asset: CreateAssetDto) {
    this.assetsService.create(asset);
  }
}
