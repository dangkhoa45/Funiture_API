import mongoose from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';
import { User } from 'src/users/schema/user.schema';

import {
  Prop,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type OrderDocument = Order & Document;

export class Order {
  @ApiProperty({
    description: 'create userId by id of User',
    example: '62827ea0d0619ad6de334f95'
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @ApiProperty({
    description: 'create cart by id Cart',
  })
  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Cart' })
  cart: Cart[];

  @ApiProperty({
    description: 'transport',
    example:'fast'
  })
  @Prop()
  transport: string;

  @ApiProperty({
    description: 'stastus',
    example:'check'
  })
  @Prop()
  status: string;

  @Prop({ type: Date, default: Date.now })
  createTime: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order)
