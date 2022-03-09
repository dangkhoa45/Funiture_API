import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SanPhamController } from './san-pham.controller';
import { SanPhamService } from './san-pham.service';
import {
  SanPhams,
  SanPhamsSchema,
} from './schema/san-pham.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: SanPhams.name, schema: SanPhamsSchema }]),
  ],
  controllers: [SanPhamController],
  providers: [SanPhamService]
})
export class SanPhamModule {}
