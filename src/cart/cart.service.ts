import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';

import {
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import {
  Cart,
  CartDocument,
} from './schema/cart.schema';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name)
    @Inject(forwardRef(() => ProductsService))
    private cartModel: Model<CartDocument>,
    private productService: ProductsService
  ) { }

  async create(createCartDto: CreateCartDto) {
    const createCart = new this.cartModel(createCartDto);
    return createCart.save();
  }

  async findById(_id: string) {
    return await (await this.cartModel.findById(_id)).populate('product');
  }

  async findAll() {
    return this.cartModel.find().populate('product').exec();
  }

  async update(_id: string, updateCartDto: UpdateCartDto) {
    return await this.cartModel.findByIdAndUpdate(_id, { updateCartDto });
  }

  async remove(_id: string) {
    return await this.cartModel.findByIdAndRemove({ _id });
  }

  async addProduct(id: string, productId: string) {
    const product = await this.productService.findOne(productId);
    const customer = await this.cartModel.findById(id);
    if (!customer.product || customer.product === null) {
      customer.product = [];
    }
    product._id = productId;
    customer.product?.push(product);
    customer.quantity = customer.quantity + 1;
    // console.log(cart)
    customer.save()
    return customer;
  }
}
