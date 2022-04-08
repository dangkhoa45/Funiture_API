import { Public } from 'src/auth/jwt-auth.guard';
import { KhachHangService } from 'src/khach-hang/khach-hang.service';

import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './schema/cart.schema';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly khachHangService: KhachHangService
  ) { }

  @Public()
  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    //console.log(createCartDto.createUser);
    return this.cartService.create(createCartDto);
  }

  @Public()
  @Get('id')
  async findOne(@Param('id') _id: string): Promise<Cart> {
    return this.cartService.findById(_id).exec();
  }

  @Public()
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Public()
  @Patch('id')
  async update(@Param('id') _id: string, updateCartDto: UpdateCartDto) {
    return this.cartService.update(_id, updateCartDto);
  }

  @Public()
  async detele(@Param('id') _id: string) {
    return this.cartService.remove(_id);
  }
}
