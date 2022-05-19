import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schema/users.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { Chats } from './chats.schema';

export type ChatDocument = ChatRoom & Document;

@Schema()
export class ChatRoom {

  @ApiProperty({
    description: 'create user by id of User',
    example: '628648e6240dfe660f3e62cc',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @ApiProperty({
    description: 'create message by Chat',
    example: [],
  })
  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Chats' })
  message: Chats[];

}

export const ChatRoomSchema = SchemaFactory.createForClass(ChatRoom);
