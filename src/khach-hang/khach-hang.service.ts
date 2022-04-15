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
    @InjectModel(KhachHangs.name)
    private khachHangModel: Model<KhachHangDocument>,
  ) {}

  async create(createKhachHangDto: CreateKhachHangDto): Promise<KhachHangs> {
    const createKhachHang = new this.khachHangModel(createKhachHangDto);
    return createKhachHang.save();
  }

  async findAll() {
    return await this.khachHangModel.find().exec();
  }

  async findOne(_id: string): Promise<KhachHangs> {
    return await this.khachHangModel.findOne({ _id }).exec();
  }

  async findInput(input: string) {
    return await this.khachHangModel.findOne({
      $or: [{ username: input }, { email: input }],
    });
  }

  async update(_id: string, updateKhachHangDto: UpdateKhachHangDto) {
    return await this.khachHangModel.findByIdAndUpdate({_id}, updateKhachHangDto);
  }

  async remove(_id: string) {
    return await this.khachHangModel.findByIdAndRemove({ _id });
  }

  async uploadAVT(_id: string, avt: string) {
    return await this.khachHangModel.findByIdAndUpdate(_id, { avt });
  }
}
