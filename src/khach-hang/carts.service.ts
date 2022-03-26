import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CreateCartsDto } from "./dto/create-carts.dto";
import { Carts, CartsDocument } from "./schema/carts.schema";
import { Model } from 'mongoose';
@Injectable()
export class CartsService {

  constructor(
    @InjectModel(Carts.name) private cartsModel: Model <CartsDocument>
  ) {}

  async create(createCartsDto: CreateCartsDto){
    const createCartDto = new this.cartsModel(createCartsDto);
    return createCartDto.save();
  }

  findAll() {
    return this.cartsModel.find().exec();
  }

  findOne(_id: string) {
    return this.cartsModel.findOne({_id});
  }

  remove(_id: string) {
    return this.cartsModel.findByIdAndRemove({_id});
  }
}