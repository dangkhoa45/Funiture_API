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
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { CreateKhachHangDto } from './dto/create-khach-hang.dto';
import { UpdateKhachHangDto } from './dto/update-khach-hang.dto';
import { KhachHangService } from './khach-hang.service';
import { join } from 'path';

const fs = require('fs');
const path = require('path');

export const storage = {
  storage: diskStorage({
    destination: './uploads/profileimages',
    filename: (req, file, cb) => {
      const filename: string =
        path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
      const extension: string = path.parse(file.originalname).ext;

      cb(null, `${filename}${extension}`);
    },
  }),
};

@ApiTags('Khach Hang')
@Controller('/khach-hang')
export class KhachHangController {
  constructor(private readonly khachHangService: KhachHangService) {}

  @Public()
  @Post()
  create(@Body() createKhachHangDto: CreateKhachHangDto) {
    return this.khachHangService.create(createKhachHangDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.khachHangService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.khachHangService.findOne(_id);
  }

  @Public()
  @Patch(':id')
  update(
    @Param('id') _id: string,
    @Body() updateKhachHangDto: UpdateKhachHangDto,
  ) {
    return this.khachHangService.update(_id, updateKhachHangDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.khachHangService.remove(_id);
  }

  @Public()
  @Post(':id/avt')
  @UseInterceptors(FileInterceptor('avt', storage))
  uploadFile(@Param('id') _id: string, @UploadedFile() file) {
    // const relativePath = `uploads/profileimages/${file.originalname}`;
    // const absolutePath = path.resolve(relativePath);
    // if (!fs.existsSync(path.dirname(absolutePath))) {
    //   fs.mkdirSync(path.dirname(absolutePath), {
    //     recursive: true,
    //   });
    // }
    return this.khachHangService.uploadAVT(_id, file.filename);
  }

  @Public()
  @Get('uploads/profileimages/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res) {
    return res.sendFile(
      join(process.cwd(), 'uploads/profileimages/' + imagename),
    );
  }
}
