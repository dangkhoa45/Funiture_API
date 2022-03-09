import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CreateSanPhamDto } from './dto/create-san-pham.dto';
import { UpdateSanPhamDto } from './dto/update-san-pham.dto';
import { SanPhamService } from './san-pham.service';

@Controller('san-pham')
export class SanPhamController {
  constructor(private readonly sanPhamService: SanPhamService) {}

  @Post()
  create(@Body() createSanPhamDto: CreateSanPhamDto) {
    return this.sanPhamService.create(createSanPhamDto);
  }

  @Get()
  findAll() {
    return this.sanPhamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.sanPhamService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateSanPhamDto: UpdateSanPhamDto) {
    return this.sanPhamService.update(_id, updateSanPhamDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.sanPhamService.remove(_id);
  }
}
