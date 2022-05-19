import mongoose, { Document } from 'mongoose';
import { Cart } from 'src/cart/schema/cart.schema';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;
@Schema()
export class User {
    @ApiProperty({
        description: 'Create a username by User',
        example: 'dang khoa'
    })
    @Prop()
    username: string;

    @ApiProperty({
        description: 'Create a name by User',
        example: 'khoa'
    })
    @Prop()
    name: string;

    @ApiProperty({
        description: 'Create a email by User',
        example: 'dangkhoa@1234'
    })
    @Prop()
    email: string;

    @ApiProperty({
        description: 'Create a password by User',
        example: '111111111'
    })
    @Prop()
    password: string;

    @ApiProperty({
        description: 'Create a address by User',
        example: 'Ninh Kieu'
    })
    @Prop({ required: true })
    address: string;

    @ApiProperty({
        description: 'Create a phone by User',
        example: '012346789'
    })
    @Prop({ required: true })
    phone: string;

    @Prop({ default: '' })
    avt: string;

    @ApiProperty({
        description: 'create Cart by array Cart',
        example: []
    })
    @Prop({type: { type: mongoose.Schema.Types.Array, ref: 'Cart' }})
    cart: Cart[];
}

export const UserSchema = SchemaFactory.createForClass(User);
