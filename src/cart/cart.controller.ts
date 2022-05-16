import { Public } from 'src/auth/jwt-auth.guard';

import {
  Body,
  Controller,
  Delete,
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
  ) { }

  @Public()
  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cart> {
    return await this.cartService.findById(id);
  }

  @Public()
  @Get()
  async findAll() {
    return await this.cartService.findAll();
  }

  @Public()
  @Get(':id')
  async findById(@Param('id') _id: string) {
    return await this.cartService.findById(_id);
  }

  @Public()
  @Patch(':id')
  async update(@Param('id') _id: string, @Body() updateCartDto: UpdateCartDto) {
    return await this.cartService.update(_id, updateCartDto);
  }

  @Public()
  @Delete(':id')
  async detele(@Param('id') _id: string) {
    return await this.cartService.remove(_id);
  }

  @Public()
  @Post(':id/addProduct/:productId')
  async addProduct(@Param('id') _id: string, @Param('productId') productId: string) {
    return await this.cartService.addProduct(_id, productId);
  }
}
