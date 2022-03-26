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

import { CreateKhachHangDto } from './dto/create-khach-hang.dto';
import { UpdateKhachHangDto } from './dto/update-khach-hang.dto';
import { KhachHangService } from './khach-hang.service';
import { ApiTags } from '@nestjs/swagger';
  
@ApiTags('Khach Hang')
@Controller('/khach-hang')
export class KhachHangController {
  constructor(private readonly khachHangService: KhachHangService) {}

  @Public()
  @Post()
  create(@Body() createKhachHangDto: CreateKhachHangDto) {
    return this.khachHangService.create(createKhachHangDto);
  }

  @Get()
  findAll() {
    return this.khachHangService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.khachHangService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKhachHangDto: UpdateKhachHangDto) {
    return this.khachHangService.update(id, updateKhachHangDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.khachHangService.remove(_id);
  }

  @Get()
  async getEmail(@Query('email') username : string){
    return this.khachHangService.findByUsername(username);
  }
}
