import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type ChatDocument = Chat & Document;
@Schema()
export class Chat extends Document{
    @Prop()
    messeage: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "khachHangs" })
    sendBy: KhachHangs;

    @Prop({type: Date.now})
    time: Date
}

export const ChatSchema = SchemaFactory.createForClass(Chat);

