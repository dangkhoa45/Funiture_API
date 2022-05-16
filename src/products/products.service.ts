import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  Product,
  ProductDocument,
} from './schema/product.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<ProductDocument>,
  ) {}

  create(createProduct: CreateProductDto) {
    const data = new this.ProductModel(createProduct);
    return data.save();
  }

  findAll() {
    return this.ProductModel.find().exec();
  }

  findOne(_id: string) {
    return this.ProductModel.findOne({ _id });
  }

  update(_id: string, update: UpdateProductDto) {
    return this.ProductModel.findByIdAndUpdate({ _id }, update);
  }

  remove(_id: string) {
    return this.ProductModel.findByIdAndRemove({ _id });
  }

  upLoadImage(_id: string, image: string) {
    return this.ProductModel.findByIdAndUpdate(_id, { image });
  }
}
