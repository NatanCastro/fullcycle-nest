import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { CreateAssetDto } from './dto/create.dto';

@Injectable()
export class AssetsService {
  constructor(private prismaService: PrismaService) {}
  listAll() {
    return this.prismaService.asset.findMany();
  }

  create(data: CreateAssetDto) {
    return this.prismaService.asset.create({ data });
  }
}
