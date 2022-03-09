import { Document } from 'mongoose';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type KhachHangDocument = KhachHangs & Document;
export type KhachHang = any;

@Schema()
export class KhachHangs extends Document {

    // @Prop()
    // id_KH: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    address: string;

    @Prop()
    phone: string;

    @Prop()
    avt: string;
}

export const KhachHangSchema = SchemaFactory.createForClass(KhachHangs);