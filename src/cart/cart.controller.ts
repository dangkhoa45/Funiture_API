import { Public } from 'src/auth/jwt-auth.guard';
import { KhachHangService } from 'src/khach-hang/khach-hang.service';
import { SanPhamService } from 'src/san-pham/san-pham.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
    private readonly khachHangService: KhachHangService,
    private readonly sanphamService: SanPhamService,
  ) {}

  @Public()
  @Post()
  async create(@Body() createCartDto: CreateCartDto) {
    //console.log(createCartDto.createUser);
    return this.cartService.create(createCartDto);
  }

  @Public()
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Cart> {
    return await this.cartService.findById(id);
  }

  @Public()
  @Get()
  async findAll(): Promise<Cart[]> {
    return await this.cartService.findAll();
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
  @Get(':id/updateCart')
  async getCart(@Param('id') id: string) {
    const result = await this.cartService.findById(id);
    if (!result) {
      const foundUser = await this.khachHangService.findOne(id);
      if (!foundUser) {
        throw new HttpException(
          'Not found User ! try again ',
          HttpStatus.NOT_FOUND,
        );
      }
      throw new HttpException(
        'Not found Car ! try again ',
        HttpStatus.NOT_FOUND,
      );
    }
    await this.cartService.update(id, {
      item: result.item + 1,
      createAt: new Date(),
    });

    console.log(result);
    return { result };
  }
}
