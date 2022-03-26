import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { Carts, CartsSchema } from './schema/carts.schema';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Carts.name, schema: CartsSchema }]),
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}