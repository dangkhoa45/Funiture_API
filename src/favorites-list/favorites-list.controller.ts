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

import { CreateFavoritesListDto } from './dto/create-favorites-list.dto';
import { UpdateFavoritesListDto } from './dto/update-favorites-list.dto';
import { FavoritesListService } from './favorites-list.service';

@ApiTags('favorites list')
@Controller('/favorites-list')
export class FavoritesListController {
  constructor(private readonly favoritesListService: FavoritesListService) {}

  @Public()
  @Post()
  create(@Body() createFavoritesListDto: CreateFavoritesListDto) {
    return this.favoritesListService.create(createFavoritesListDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.favoritesListService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritesListService.findOne(id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoritesListDto: UpdateFavoritesListDto) {
    return this.favoritesListService.update(id, updateFavoritesListDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoritesListService.remove(id);
  }

  @Public()
  @Post(':id/addProduct/:productId')
  async addProduct(@Param('id') _id: string, @Param('productId') productId: string) {
    return await this.favoritesListService.addProduct(_id, productId);
  }
}
