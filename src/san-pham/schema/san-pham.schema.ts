import { Document } from 'mongoose';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type SanPhamDocument = SanPhams & Document;


@Schema()
export class SanPhams extends Document{
  
    @Prop()
    ten_SP: string;

    @Prop()
    nsx_SP: string;

    @Prop()
    chiTiet_SP: string;

    @Prop()
    soLuong_SP: string;

    @Prop()
    soLuong_DB: string;

    @Prop()
    image: string;
}
export const SanPhamsSchema = SchemaFactory.createForClass(SanPhams);