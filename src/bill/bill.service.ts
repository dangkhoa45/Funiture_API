import { Model } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill, BillDocument } from './schema/bill.schema';

@Injectable()
export class BillService {
  constructor(@InjectModel(Bill.name) private billModel: Model<BillDocument>) {}

  create(createBillDto: CreateBillDto) {
    const createBill = new this.billModel(createBillDto);
    return createBill.save();
  }

  findAll() {
    return this.billModel.find().exec();
  }

  findOne(_id: string) {
    return this.billModel.findOne({ _id });
  }

  update(_id: string, updateBillDto: UpdateBillDto) {
    return this.billModel.findByIdAndUpdate(_id, updateBillDto);
  }

  remove(_id: string) {
    return this.billModel.findOneAndRemove({ _id });
  }
}
