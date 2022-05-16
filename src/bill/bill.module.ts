import { CartModule } from 'src/cart/cart.module';

import {
  forwardRef,
  Module,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import {
  Bill,
  BillSchema,
} from './schema/bill.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Bill.name, schema: BillSchema }]),
    forwardRef(() => CartModule)
  ],
  controllers: [BillController],
  providers: [BillService],
})
export class BillModule {}
