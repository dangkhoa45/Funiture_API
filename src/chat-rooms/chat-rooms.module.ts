import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatRoomsController } from './chat-rooms.controller';
import { ChatRoomsService } from './chat-rooms.service';
import {
  ChatRoom,
  ChatRoomSchema,
} from './schema/chat-room.schema';
import {
  Chats,
  ChatSchema,
} from './schema/chats.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: ChatRoom.name, schema: ChatRoomSchema }]),
    MongooseModule.forFeature([{ name: Chats.name, schema: ChatSchema }]),
  ],
  controllers: [ChatRoomsController],
  providers: [ChatRoomsService]
})
export class ChatRoomsModule { }
