import { Document } from 'mongoose';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type SanPhamDocument = SanPhams & Document;

@Schema()
export class SanPhams extends Document {
  @Prop()
  title: string;

  @Prop()
  producer: string;

  @Prop()
  details: string;

  @Prop()
  amount: string;

  @Prop()
  sold: string;

  @Prop()
  price: string;

  @Prop()
  tag: string;

  @Prop()
  image: string;

  @Prop()
  quantity: string;
}
export const SanPhamsSchema = SchemaFactory.createForClass(SanPhams);
