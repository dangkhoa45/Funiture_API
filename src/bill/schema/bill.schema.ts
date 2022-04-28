import mongoose, { Document } from 'mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';
import { SanPhams, SanPhamsSchema } from 'src/san-pham/schema/san-pham.schema';

import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type BillDocument = Bill & Document;

export class Bill extends Document {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'khachHangs' } })
  userName: KhachHangs;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'khachHangs' } })
  userEmail: KhachHangs;

  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'khachHangs' } })
  userAddress: KhachHangs;

  @Prop({ type: SanPhamsSchema })
  product: [SanPhams];

  @Prop()
  status: string;

  @Prop({ type: Date.now })
  createTime: Date;
}
export const BillSchema = SchemaFactory.createForClass(Bill);
