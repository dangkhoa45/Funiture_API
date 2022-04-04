import { diskStorage } from 'multer';
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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { CreateSanPhamDto } from './dto/create-san-pham.dto';
import { UpdateSanPhamDto } from './dto/update-san-pham.dto';
import { SanPhamService } from './san-pham.service';

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

@ApiTags('San Pham')
@Controller('/san-pham')
export class SanPhamController {
  constructor(private readonly sanPhamService: SanPhamService) {}

  @Public()
  @Post()
  create(@Body() createSanPhamDto: CreateSanPhamDto) {
    return this.sanPhamService.create(createSanPhamDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.sanPhamService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.sanPhamService.findOne(_id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateSanPhamDto: UpdateSanPhamDto) {
    return this.sanPhamService.update(_id, updateSanPhamDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.sanPhamService.remove(_id);
  }

  @Public()
  @Post(':id/image')
  @UseInterceptors(FileInterceptor('image', storage))
  uploadFile(
    @Param('id') _id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const relativePath = `uploads/profileimages/${file.originalname}`;
    const absolutePath = path.resolve(relativePath);
    if (!fs.existsSync(path.dirname(absolutePath))) {
      fs.mkdirSync(path.dirname(absolutePath), {
        recursive: true,
      });
    }
    return this.sanPhamService.upLoadImage(_id, relativePath);
  }
}
