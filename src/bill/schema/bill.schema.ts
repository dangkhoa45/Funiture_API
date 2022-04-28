import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';
import { SanPhams } from 'src/san-pham/schema/san-pham.schema';

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

  @Prop({ type: mongoose.Schema.Types.Array, ref: "SanPhams" })
  product: [SanPhams];

  @Prop()
  status: string;

  @Prop({ type: Date.now })
  createTime: Date;
}
export const BillSchema = SchemaFactory.createForClass(Bill);
