import { Model } from 'mongoose';
import { CartService } from 'src/cart/cart.service';

import {
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {
  Order,
  OrderDocument,
} from './schema/order.schema';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  @Inject(forwardRef(() => CartService)) 
  private cartService: CartService
  ) { }

  create(data: CreateOrderDto) {
    const createOrder = new this.orderModel(data)
    return createOrder.save();
  }

  findAll() {
    return this.orderModel.find().exec();
  }

  findOne(_id: string) {
    return this.orderModel.findById({ _id })
  }

  update(_id: string, update: UpdateOrderDto) {
    return this.orderModel.findByIdAndUpdate(_id, { update });
  }

  remove(_id: string) {
    return this.orderModel.findByIdAndRemove({ _id });
  }

  async addCart(id: string, cartId: string) {
    const cart = await this.cartService.findById(cartId);
    const customer = await this.orderModel.findById(id);
    if (!customer.cart || customer.cart === null) {
      customer.cart = [];
    }
    cart._id = cart;
    customer.cart?.push(cart);
    // console.log(cart)
    customer.save()
    return customer;
  }
}
