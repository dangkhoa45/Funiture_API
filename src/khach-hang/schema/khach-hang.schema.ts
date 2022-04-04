import { Document } from 'mongoose';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Chats, ChatSchema } from './chats.shema';

export type KhachHangDocument = KhachHangs & Document;
export type KhachHang = any;

@Schema()
export class KhachHangs extends Document {
  @Prop()
  username: string;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop()
  password: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ default: '' })
  avt: string;

  @Prop({ type: CartSchema })
  cart: [Cart];

  @Prop({ type: ChatSchema })
  chat: [Chats];
}

export const KhachHangSchema = SchemaFactory.createForClass(KhachHangs);
