import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart extends Document {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'khachHangs' } })
  createUser: KhachHangs;

  @Prop()
  title: string;

  @Prop()
  quantity: string;

  @Prop()
  price: string;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
