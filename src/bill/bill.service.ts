import { Model } from 'mongoose';
import { CartService } from 'src/cart/cart.service';

import {
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import {
  Bill,
  BillDocument,
} from './schema/bill.schema';

@Injectable()
export class BillService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>,
  @Inject(forwardRef(() => CartService))
  private cartService: CartService
  
  ) {}

  create(createBillDto: CreateBillDto) {
    const createBill = new this.billModel(createBillDto);
    return createBill.save();
  }

  findAll() {
    return this.billModel.find().exec();
  }

  findOne(_id: string) {
    return this.billModel.findById({ _id });
  }

  update(_id: string, updateBillDto: UpdateBillDto) {
    return this.billModel.findByIdAndUpdate(_id, updateBillDto);
  }

  remove(_id: string) {
    return this.billModel.findOneAndRemove({ _id });
  }

  async addCart(id: string, cartId: string) {
    const cart = await this.cartService.findById(cartId);
    const customer = await this.billModel.findById(id);
    if (!customer.cart || customer.cart === null) {
      customer.cart = [];
    }
    cart._id = cartId;
    customer.cart?.push(cart);
    // console.log(cart)
    customer.save()
    return customer;
  }
}
