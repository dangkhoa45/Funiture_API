import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Khach Hang' })
  createUser: KhachHangs;

  @Prop()
  productId: string;

  @Prop()
  title: string;

  @Prop()
  quantity: string;

  @Prop()
  price: string;

  @Prop({ default: 0 })
  item: number;

  @Prop({ type: Date, default: Date.now })
  createAt: Date;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
