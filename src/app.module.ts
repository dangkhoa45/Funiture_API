import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { KhachHangModule } from './khach-hang/khach-hang.module';
import { SanPhamModule } from './san-pham/san-pham.module';

@Module({
  imports: [
    KhachHangModule,
    MongooseModule.forRoot(
      'mongodb+srv://truongb1805829:CaJznJZ7@restapicluster.wmetd.mongodb.net/FUNITURE_API?retryWrites=true&w=majority',
    ),
    SanPhamModule,
    AuthModule,
    CartModule,
    BillModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
