import * as bcrypt from 'bcrypt';
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

import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
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

@ApiTags('admin')
@Controller('/admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
  ) { }

  @Public()
  @Post()
  async create(@Body() data: CreateAdminDto) {
    const { password } = data;
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    data.password = hash;
    const result = await this.adminService.create(data);
    return result;
  }

  @Public()
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  @Public()
  @Get(':id')
  findById(@Param('id') _id: string) {
    return this.adminService.findById(_id);
  }

  @Public()
  @Patch(':id')
  update(
    @Param('id') _id: string,
    @Body() updateUser: UpdateAdminDto,
  ) {
    return this.adminService.update(_id, updateUser);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.adminService.remove(_id);
  }

  @Public()
  @Post(':id/avt')
  @UseInterceptors(FileInterceptor('avt', storage))
  uploadFile(@Param('id') _id: string, @UploadedFile() file) {
    return this.adminService.uploadAVT(_id, file.filename);
  }

  @Public()
  @Get('uploads/profileimages/:imagename')
  findProfileImage(@Param('imagename') imagename, @Res() res) {
    return res.sendFile(
      join(process.cwd(), 'uploads/profileimages/' + imagename),
    );
  }

  @Public()
  @Post(':id/add_cart/:cartId')
  async addCart(@Param('id') _id: string, @Param('cartId') cartId: string) {
    return this.adminService.addCart(_id, cartId);
  }

  @Public()
  @Get(':id/cart')
  getCart(@Param('id') _id: string) {
    return this.adminService.getCart(_id);
  }
}
