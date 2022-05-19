import { Public } from 'src/auth/jwt-auth.guard';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';

import { ChatRoomsService } from './chat-rooms.service';
import { CreateChatRoomDto } from './dto/create-chat-room.dto';

@Controller('chat-rooms')
export class ChatRoomsController {
  constructor(private readonly chatRoomsService: ChatRoomsService) {}

  @Public()
  @Post()
  create(@Body() createChatRoomDto: CreateChatRoomDto) {
    return this.chatRoomsService.create(createChatRoomDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.chatRoomsService.findAll();
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatRoomsService.findOne(id);
  }

  @Public()
  @Post(':id/addMessage')
  addMessage(@Param('id') id: string, @Body() text: string) {
    return this.chatRoomsService.update(id, text);
  }

  @Public()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatRoomsService.remove(id);
  }
}
