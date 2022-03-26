import { Public } from 'src/auth/jwt-auth.guard';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartsDto } from './dto/create-carts.dto';
import { ApiTags } from '@nestjs/swagger';
  
@ApiTags('Carts')
@Controller('/Carts')
export class CartsController {
  constructor(private readonly cartService: CartsService) {}

  @Public()
  @Post()
  create(@Body() createCartsDto: CreateCartsDto) {
    return this.cartService.create(createCartsDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.cartService.findOne(_id);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.cartService.remove(_id);
  }
}
