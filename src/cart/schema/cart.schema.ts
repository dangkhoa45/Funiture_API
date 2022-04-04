import { Document } from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart extends Document {
  @Prop()
  title: string;

  @Prop()
  quantity: string;

  @Prop()
  price: string;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
