import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCartDto } from './dto/create-cart.dto';
import {
  Cart,
  CartDocument,
} from './schema/cart.schema';

@Injectable()
export class CartService {
  constructor( @InjectModel(Cart.name) private cartModel: Model < CartDocument>){}
 
  async create(_id: string,createCartDto: CreateCartDto): Promise <Cart>{
    const createCart = new this.cartModel(createCartDto)
    return createCart.save()
  }

  findById(_id: string) {
    return this.cartModel.findOne({_id});
  }

}
