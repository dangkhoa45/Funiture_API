import { Document } from 'mongoose';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';

export type SanPhamDocument = SanPham & Document;
export type SanPham = any;

@Schema()
export class SanPhams {
  
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
}
export const SanPhamsSchema = SchemaFactory.createForClass(SanPhams);