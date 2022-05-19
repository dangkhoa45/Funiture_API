import mongoose, { Document } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';
import { User } from 'src/users/schema/users.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type BillDocument = Bill & Document;

@Schema()
export class Bill extends Document {
  @ApiProperty({
    description: "create userId by id of User",
    example: '62827ea0d0619ad6de334f95'
  })
  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  userId: User;

  @ApiProperty({
    description: "create cart by id of Cart",
    example: []
  })
  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Cart' })
  cart: Cart[];

  @ApiProperty({
    description: "transport",
    example: 'fast'
  })
  @Prop()
  transport: string;

  @Prop({ type: Date, default: Date.now })
  createTime: Date;
}
export const BillSchema = SchemaFactory.createForClass(Bill);
