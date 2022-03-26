import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

import { File } from './file.schema';
import { FileService } from './file.service';

import { ApiTags } from '@nestjs/swagger';
  
@ApiTags('Files')
@Controller('files')
export class FileController {
    constructor(private readonly fileService: FileService){}
    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'file', maxCount: 1 },
        { name: 'cover', maxCount: 1 },
    ]))
    async createBook(@Res() response, @Req() request, @Body() file: File, @UploadedFiles() files: { file?: Express.Multer.File[], cover?: Express.Multer.File[] }) {
        const requestBody = { createdBy: request.user, title: file.title, file: files.file[0].filename, coverImage: files.cover[0].filename }
        const newFile = await this.fileService.createFile(requestBody);
        return response.status(HttpStatus.CREATED).json({
            newFile
        })
    }
    
    @Get()
    async read(@Query() id): Promise<Object> {
        return await this.fileService.readFile(id);
    }

    @Get('/:id')
    async stream(@Param('id') id, @Res() response, @Req() request) {
        return this.fileService.streamFile(id, response, request);
    }

    @Put('/:id')
    async update(@Res() response, @Param('id') id, @Body() file: File) {
        const updateFile = await this.fileService.update(id, file);
        return response.status(HttpStatus.OK).json(updateFile)
    }

    @Delete('/:id')
    async delete(@Res() response, @Param('id') id) {
        await this.fileService.delete(id);
        return response.status(HttpStatus.OK).json({
            user: null
        })
    }
}