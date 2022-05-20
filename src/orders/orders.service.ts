import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';

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
  @Inject(forwardRef(() => ProductsService)) 
  private productSerever: ProductsService
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

  async addProduct(id: string, productId: string) {
    const product = await this.productSerever.findOne(productId);
    const customer = await this.orderModel.findById(id);
    if (!customer.product || customer.product === null) {
      customer.product = [];
    }
    product._id = productId;
    customer.product?.push(product);
    // console.log(cart)
    customer.save()
    return customer;
  }
}
