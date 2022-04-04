import mongoose, { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { KhachHangs } from './khach-hang.schema';

@Schema()
export class Chats extends Document {
  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'KhachHangs.name' })
  createBy: KhachHangs;

  @Prop({ type: Date, default: Date.now })
  createTime: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chats);
