import mongoose, { Document } from 'mongoose';
import { Product } from 'src/products/schema/product.schema';
import { User } from 'src/users/schema/users.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {

  @ApiProperty({
    description: 'create User by id User',
    example: '6280aba80cd7f70f0595d11a'
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @ApiProperty({
    description: 'create product by id Product',
    example: []
  })
  @Prop({ type: mongoose.Schema.Types.Array, ref: 'Product' })
  product: Product[];

  @Prop({ type: Date, default: Date.now })
  createAt: Date;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
