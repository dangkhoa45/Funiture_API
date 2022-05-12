import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ChatDocument = Chat & Document;
@Schema()
export class Chat extends Document {
  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'khachHangs' })
  sendBy: KhachHangs;

  @Prop({ type: String, default: Date.now })
  time: Date;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
