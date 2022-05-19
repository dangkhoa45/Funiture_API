import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schema/users.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ChatDocument = Chats & Document;

@Schema()
export class Chats {
    @ApiProperty({
        description: 'create user by id user',
        example: ''
    })
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    sendBy: User;

    @ApiProperty({
        description: 'message',
        example: 'hello'
    })
    @Prop()
    message: string;

    @ApiProperty({
        description: 'time',
        type: Date,
    })
    @Prop({ type: Date, default: Date.now })
    createTime: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chats);