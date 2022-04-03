import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateKhachHangDto } from './dto/create-khach-hang.dto';
import { UpdateKhachHangDto } from './dto/update-khach-hang.dto';
import {
  KhachHangDocument,
  KhachHangs,
} from './schema/khach-hang.schema';

@Injectable()
export class KhachHangService {

  constructor(
    @InjectModel(KhachHangs.name) private khachHangModel: Model <KhachHangDocument>
  ) {}

  async create(createKhachHangDto: CreateKhachHangDto) : Promise<KhachHangs> {
    const createKhachHang = new this.khachHangModel(createKhachHangDto);
    return createKhachHang.save() ;
  }

  findAll() {
    return this.khachHangModel.find().exec();
  }

  findOne(_id: string) {
    return this.khachHangModel.findOne({_id});
  }

  async getOne(email): Promise<KhachHangs> {
    return await this.khachHangModel.findOne({ email }).exec();
}

  findByUsername(input: string){
    return this.khachHangModel.findOne({$or:[{username: input},{email:input}]});
  }

  update(_id: string, updateKhachHangDto: UpdateKhachHangDto) {
    return this.khachHangModel.findByIdAndUpdate(_id, updateKhachHangDto);
  }

  remove(_id: string) {
    return this.khachHangModel.findByIdAndRemove({_id});
  }

  uploadAVT(_id: string, avt: string){
    return this.khachHangModel.findByIdAndUpdate(_id,{avt});
  }
}
