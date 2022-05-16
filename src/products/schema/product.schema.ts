import { Document } from 'mongoose';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @ApiProperty({
        description: 'title of Product',
        example: "Ghe nho"
    })
    @Prop()
    title: string;

    @ApiProperty({
        description: 'create name of producer',
        example: "Max"
    })
    @Prop()
    producer: string;

    @ApiProperty({
        description: 'details of Product',
        example: '...'
    })
    @Prop()
    details: string;

    @ApiProperty({
        description: 'amount of Product',
        example: 1
    })
    @Prop()
    amount: string;

    @ApiProperty({
        description: 'sold of Product',
        example: "good"
    })
    @Prop()
    sold: string;

    @ApiProperty({
        description: 'create price of Product',
        example: "200000"
    })
    @Prop()
    price: string;

    @ApiProperty({
        description: 'tag',
        example: "..."
    })
    @Prop()
    tag: string;

    @ApiProperty({
        description: 'sale',
        example: "..."
    })
    @Prop()
    sale: string;

    @Prop()
    image: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
