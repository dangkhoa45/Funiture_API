import * as mongoose from 'mongoose';

import {
  Prop,
  Schema,
  SchemaFactory,
} from '@nestjs/mongoose';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';


export type FileDocument = File & Document;

@Schema()
export class File {
  
    @Prop()
    title: string;

    @Prop()
    image: string;

    @Prop()
    coverImage: string;

    @Prop({ default: Date.now() })
    uploadDate: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "KhachHang" })
    createdBy: KhachHangs;
}
export const FileSchema = SchemaFactory.createForClass(File)