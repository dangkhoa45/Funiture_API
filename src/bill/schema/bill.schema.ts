import mongoose, { Document } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type BillDocument = Bill & Document;

@Schema()
export class Bill extends Document {
  @Prop({ type: mongoose.Schema.Types.String, ref: "khachHangs" })
  userName: KhachHangs;

  @Prop({ type: mongoose.Schema.Types.String, ref: "khachHangs" })
  userEmail: KhachHangs;

  @Prop({ type: mongoose.Schema.Types.String, ref: "khachHangs" })
  userAddress: KhachHangs;

  @Prop({ type: mongoose.Schema.Types.Array, ref: "Cart" })
  product: [Cart];

  @Prop()
  status: string;

  @Prop({ type: Date, default: Date.now })
  createTime: Date;
}
export const BillSchema = SchemaFactory.createForClass(Bill);
