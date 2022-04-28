import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import {
  Chat,
  ChatSchema,
} from './schema/chat.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Chat.name, schema: ChatSchema }]),
  ],
  controllers: [ChatsController],
  providers: [ChatsService]
})
export class ChatsModule {}
