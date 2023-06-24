import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma/prisma.service';
import { CreateOrderDto } from './dto/create.dto';

@Injectable()
export class OrderService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    this.prismaService.order.findMany();
  }

  get(data: CreateOrderDto) {
    this.prismaService.order.create({ data });
  }
}
