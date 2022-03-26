import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';

import { KhachHangController } from './khach-hang.controller';
import { KhachHangService } from './khach-hang.service';
import { Carts, CartsSchema } from './schema/carts.schema';
import {
  KhachHangs,
  KhachHangSchema,
} from './schema/khach-hang.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carts.name, schema: CartsSchema }]),
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}