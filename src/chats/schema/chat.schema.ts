import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ChatDocument = Chat & Document;
@Schema()
<<<<<<< HEAD
export class Chat extends Document{
    @Prop()
    message: string;

    @Prop({ type: mongoose.Schema.Types.String, ref: "khachHangs" })
    sendBy: KhachHangs;

    @Prop({type: String, default: Date.now})
    time: Date
=======
export class Chat extends Document {
  @Prop()
  message: string;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'khachHangs' })
  sendBy: KhachHangs;

  @Prop({ type: String, default: Date.now })
  time: Date;
>>>>>>> 5e5801eb98ce38cc07deae95e6d9b58b997fb013
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
