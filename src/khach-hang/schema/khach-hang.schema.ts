import { Document } from 'mongoose';
import { Cart, CartSchema } from 'src/cart/schema/cart.schema';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type KhachHangDocument = KhachHangs & Document;
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
  cart: Cart;
}

export const KhachHangSchema = SchemaFactory.createForClass(KhachHangs);
