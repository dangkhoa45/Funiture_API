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

import { ChatsService } from './chats.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@ApiTags('Chat')
@Controller('chat')
export class ChatsController {
  constructor(private readonly chatsService: ChatsService) {}

  @Public()
  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatsService.create(createChatDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.chatsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.chatsService.findOne(_id);
  }

  @Public()
  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatsService.update(_id, updateChatDto);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.chatsService.remove(_id);
  }
}
