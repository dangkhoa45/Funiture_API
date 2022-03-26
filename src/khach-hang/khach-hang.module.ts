import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';

import { KhachHangController } from './khach-hang.controller';
import { KhachHangService } from './khach-hang.service';
import {
  KhachHangs,
  KhachHangSchema,
} from './schema/khach-hang.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: KhachHangs.name, schema: KhachHangSchema }]),
  ],
  controllers: [KhachHangController],
  providers: [KhachHangService],
  exports: [KhachHangService]
})
export class KhachHangModule {}
