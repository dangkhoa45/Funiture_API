import { diskStorage } from 'multer';
import { join } from 'path';
import { Public } from 'src/auth/jwt-auth.guard';
import { v4 as uuidv4 } from 'uuid';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

const fs = require('fs');
const path = require('path');

export const storage = {
  storage: diskStorage({
    destination: './uploads/profileSanPham',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@ApiTags('Product')
@Controller('/products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Public()
  @Post()
  create(@Body() data: CreateProductDto) {
    return this.productService.create(data);
  }

  @Public()
  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.productService.findOne(_id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') _id: string, @Body() update: UpdateProductDto) {
    return this.productService.update(_id, update);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.productService.remove(_id);
  }

  @Public()
  @Post(':id/image')
  @UseInterceptors(FileInterceptor('image', storage))
  uploadFile(@Param('id') _id: string, @UploadedFile() file) {
    return this.productService.upLoadImage(_id, file.filename);
  }

  @Public()
  @Get('uploads/profileSanPham/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res) {
    return res.sendFile(
      join(process.cwd(), 'uploads/profileSanPham/' + imagename),
    );
  }
}
