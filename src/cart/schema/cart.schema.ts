import mongoose, { Document } from 'mongoose';
import { Product } from 'src/products/schema/product.schema';
import { User } from 'src/users/schema/user.schema';

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
    description: 'create khach hang by KhachHangs',
    example: '6280aba80cd7f70f0595d11a'
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @ApiProperty({
    description: 'create product by id Product',
  })
  @Prop({type: [{ type: mongoose.Schema.Types.Array, ref: 'Product' }]})
  product: Product[];

  @ApiProperty({
    description: 'create a quantity of Product',
    example: 0
  })
  @Prop()
  quantity: number;

  @Prop({ type: Date, default: Date.now })
  createAt: Date;
}
export const CartSchema = SchemaFactory.createForClass(Cart);
