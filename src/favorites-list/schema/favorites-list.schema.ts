import mongoose, { Document } from 'mongoose';
import { Product } from 'src/products/schema/product.schema';
import { User } from 'src/users/schema/users.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type FavoritesListDocument = FavoritesList & Document;

@Schema()
export class FavoritesList {

    @ApiProperty({
      description:"create username by id User",
      example: "628270a731cd3548d511fbba"
    })
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
    userId: User;

    @ApiProperty({
      description:"create listProduct by id Product",
      example: "628270a731cd3548d511fbba"
    })
    @Prop({type: [{ type: mongoose.Schema.Types.Array, ref: "Product" }]})
    product: Product[];
}

export const FavoritesListSchema = SchemaFactory.createForClass(FavoritesList)