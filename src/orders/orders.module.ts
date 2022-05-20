import { ProductsModule } from 'src/products/products.module';

import {
  forwardRef,
  Module,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import {
  Order,
  OrderSchema,
} from './schema/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
    ]),
    forwardRef(() => ProductsModule)
  ],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
