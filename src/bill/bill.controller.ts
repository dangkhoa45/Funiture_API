import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post()
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @Get()
  findAll() {
    return this.billService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: string) {
    return this.billService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(_id, updateBillDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: string) {
    return this.billService.remove(_id);
  }
}
