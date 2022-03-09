import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateSanPhamDto } from './dto/create-san-pham.dto';
import { UpdateSanPhamDto } from './dto/update-san-pham.dto';
import {
  SanPhamDocument,
  SanPhams,
} from './schema/san-pham.schema';

@Injectable()
export class SanPhamService {
  constructor(
    @InjectModel(SanPhams.name) private SanPhamsModel: Model <SanPhamDocument>
  ) {}

  create(createSanPhamDto: CreateSanPhamDto) {
    const createSanPham = new this.SanPhamsModel(createSanPhamDto);
    return createSanPham.save();
  }

  findAll() {
    return this.SanPhamsModel.find().exec();
  }

  findOne(_id: string) {
    return this.SanPhamsModel.findOne({_id});
  }

  update(_id: string, updateSanPhamDto: UpdateSanPhamDto) {
    return this.SanPhamsModel.findByIdAndUpdate({_id},updateSanPhamDto);
  }

  remove(_id: string) {
    return this.SanPhamsModel.findByIdAndRemove({_id});
  }
}
