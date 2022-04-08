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

  async create(createCartDto: CreateCartDto): Promise<Cart> {
    const createCart = new this.cartModel(createCartDto);
    return createCart.save();
  }

  findById(_id: string) {
    return this.cartModel.findOne({ _id });
  }

  findAll() {
    return this.cartModel.find().exec();
  }

  update(_id: string, updateCartDto: UpdateCartDto) {
    return this.cartModel.findByIdAndUpdate(_id, { updateCartDto });
  }

  remove(_id: string) {
    return this.cartModel.findByIdAndRemove({ _id });
  }
}
