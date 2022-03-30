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
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';

import { CreateKhachHangDto } from './dto/create-khach-hang.dto';
import { UpdateKhachHangDto } from './dto/update-khach-hang.dto';
import { KhachHangService } from './khach-hang.service';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

const fs = require("fs");
const path = require("path");

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

  @Public()
  @Post(':id/avt')
  @UseInterceptors(FileInterceptor('avt',{dest: 'uploads'}))
  uploadFile(@Param('id') id : string,@UploadedFile() file: Express.Multer.File) {
    const relativePath = `uploads/${id}/${file.originalname}`;
    const absolutePath = path.resolve(relativePath);
    if(!fs.existsSync(path.dirname(absolutePath))){
      fs.mkdirSync(path.dirname(absolutePath),{
        recursive:true
      });
    }
    return this.khachHangService.uploadAVT(id,relativePath);
  }
}
