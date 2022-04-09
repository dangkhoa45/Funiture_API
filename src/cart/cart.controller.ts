import { Public } from 'src/auth/jwt-auth.guard';

import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';

@ApiTags('Cart')
@Controller('Cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Public()
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Public()
  @Get()
  findOne(@Param('id') _id: string) {
    return this.cartService.findById(_id);
  }
}
