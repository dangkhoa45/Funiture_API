import { Document } from 'mongoose';
import { SanPhams, SanPhamsSchema } from 'src/san-pham/schema/san-pham.schema';

import { Prop, SchemaFactory } from '@nestjs/mongoose';

export type BillDocument = Bill & Document;

export class Bill extends Document {
  @Prop()
  userName: string;

  @Prop()
  userEmail: string;

  @Prop()
  userAddress: string;

  @Prop({ type: SanPhamsSchema })
  product: [SanPhams];
}
export const BillSchema = SchemaFactory.createForClass(Bill);
