import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import {
  Admin,
  AdminDocument,
} from './schema/admin.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name)
    private adminModel: Model<AdminDocument>,
  ) { }

  async create(admin: CreateAdminDto): Promise<Admin> {
    const data = new this.adminModel(admin);
    return data.save();
  }

  async findAll() {
    return await this.adminModel.find().populate({ path: 'cart' }).exec();
  }

  async findById(_id: string) {
    return await this.adminModel.findById({ _id }).populate({ path: 'cart' });
  }

  async findInput(input: string) {
    return await this.adminModel.findOne({
      $or: [{ username: input }, { email: input }],
    });
  }

  async findUsername(username: string) {
    return await this.adminModel.findOne({ username }).exec();
  }

  async update(_id: string, updateUser: UpdateAdminDto) {
    return await this.adminModel.findByIdAndUpdate(
      { _id },
      updateUser,
    );
  }

  async remove(_id: string) {
    return await this.adminModel.findByIdAndRemove({ _id });
  }

  async uploadAVT(_id: string, avt: string) {
    return await this.adminModel.findByIdAndUpdate(_id, { avt });
  }
}
