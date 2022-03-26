import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type CartsDocument = File & Document;

@Schema()
export class Carts extends Document{

    
    @Prop()
    title: string;

    @Prop()
    quantity:string;
    
    @Prop()
    price:string
}

export const CartsSchema = SchemaFactory.createForClass(Carts);