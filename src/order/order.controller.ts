import { Body, Controller, Get, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  findAll() {
    this.orderService.findAll();
  }

  @Post()
  create(@Body() order: CreateOrderDto) {
    this.orderService.get(order);
  }
}
