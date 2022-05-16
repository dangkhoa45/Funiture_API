import mongoose, { Document } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Cart } from 'src/cart/schema/cart.schema';

export type BillDocument = Bill & Document;

@Schema()
export class Bill extends Document {
  @Prop({ type: mongoose.Schema.Types.String, ref: 'khachHangs' })
  userName: KhachHangs;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'khachHangs' })
  userEmail: KhachHangs;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'khachHangs' })
  userAddress: KhachHangs;

<<<<<<< HEAD
  @Prop({ type: mongoose.Schema.Types.Array, ref: "Cart" })
  product: [Cart];
=======
  @Prop({ type: mongoose.Schema.Types.String, ref: 'khachHangs' })
  userPhone: KhachHangs;

  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Cart' })
  product: Cart[];

  @Prop()
  transport: string;
>>>>>>> 5e5801eb98ce38cc07deae95e6d9b58b997fb013

  @Prop()
  status: string;

  @Prop({ type: Date, default: Date.now })
  createTime: Date;
}
export const BillSchema = SchemaFactory.createForClass(Bill);
