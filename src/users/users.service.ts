import { Model } from 'mongoose';
import { CartService } from 'src/cart/cart.service';

import {
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  User,
  UserDocument,
} from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    @Inject(forwardRef(() => CartService))
    private userModel: Model<UserDocument>,
    private cartService: CartService
  ) { }

  async create(user: CreateUserDto): Promise<User> {
    const data = new this.userModel(user);
    return data.save();
  }

  async findAll() {
    return await this.userModel.find().populate({ path: 'cart' }).exec();
  }

  async findById(_id: string) {
    return await this.userModel.findById({ _id }).populate({ path: 'cart' });
  }

  async findInput(input: string) {
    return await this.userModel.findOne({
      $or: [{ username: input }, { email: input }],
    });
  }

  async findUsername(username: string) {
    return await this.userModel.findOne({ username }).exec();
  }

  async update(_id: string, updateUser: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(
      _id ,
      updateUser,
    );
  }

  async remove(_id: string) {
    return await this.userModel.findByIdAndRemove({ _id });
  }

  async uploadAVT(_id: string, avt: string) {
    return await this.userModel.findByIdAndUpdate(_id, { avt });
  }

  async addCart(id: string, cartId: string) {
    const cart = await this.cartService.findById(cartId);
    const customer = await this.userModel.findById(id);
    if (!customer.cart || customer.cart === null) {
      customer.cart = [];
    }
    cart._id = cartId;
    customer.cart.push(cart);
    // console.log(cart)
    customer.save()
    return customer;
  }

  async getCart(_id: string) {
    return await this.userModel.findById({ _id }).populate('cart');
  }

  // async removeCart(id: string, cartId: string) {
  //   const cart = await this.cartService.findById(cartId);
  //   const customer: User = await this.userModel.findById(id);
  //   if (!customer.cart || customer.cart === null) {
  //     customer.cart = [];
  //   }
  //   cart._id = cartId;
  //   customer.cart = customer.cart.filter(each => each._id !== cartId)
  //   console.log(customer);
  //   customer.save();
  //   return customer;
  // }
}
