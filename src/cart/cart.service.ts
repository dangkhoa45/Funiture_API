import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {
  Cart,
  CartDocument,
} from './schema/cart.schema';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) { }

  async create(createCartDto: CreateCartDto) {
    const createCart = new this.cartModel(createCartDto);
    return await createCart.save();
  }

  async findById(_id: string) {
    return await this.cartModel.findById({ _id });
  }

  async findAll() {
    return this.cartModel.find().exec();
  }

  async update(_id: string, updateCartDto: UpdateCartDto) {
    return await this.cartModel.findByIdAndUpdate({ _id }, updateCartDto);
  }

  async remove(_id: string) {
    return await this.cartModel.findByIdAndRemove({ _id });
  }
}
