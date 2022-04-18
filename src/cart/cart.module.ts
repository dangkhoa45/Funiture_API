import { KhachHangModule } from 'src/khach-hang/khach-hang.module';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { Cart, CartSchema } from './schema/cart.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cart.name, schema: CartSchema }]),
    KhachHangModule,
  ],
  controllers: [CartController],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
