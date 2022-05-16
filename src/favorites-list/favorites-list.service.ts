import { Model } from 'mongoose';
import { ProductsService } from 'src/products/products.service';

import {
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateFavoritesListDto } from './dto/create-favorites-list.dto';
import { UpdateFavoritesListDto } from './dto/update-favorites-list.dto';
import {
  FavoritesList,
  FavoritesListDocument,
} from './schema/favorites-list.schema';

@Injectable()
export class FavoritesListService {
  constructor(@InjectModel(FavoritesList.name) private listModel: Model<FavoritesListDocument>,
  @Inject(forwardRef(() => ProductsService))
  private productService: ProductsService
  ){}

  create(createFavoritesListDto: CreateFavoritesListDto) {
    const list = new this.listModel(createFavoritesListDto);
    return list.save();
  }

  findAll() {
    return this.listModel.find().exec();
  }

  findOne(_id: string) {
    return this.listModel.findById({_id}).exec();
  }

  update(_id: string, updateFavoritesListDto: UpdateFavoritesListDto) {
    return this.listModel.findByIdAndUpdate(_id, {updateFavoritesListDto});
  }

  remove(_id: string) {
    return this.listModel.findByIdAndRemove({_id});
  }

  async addProduct(id: string, productId: string) {
    const product = await this.productService.findOne(productId);
    const customer = await this.listModel.findById(id);
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
