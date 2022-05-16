import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { BillModule } from './bill/bill.module';
import { CartModule } from './cart/cart.module';
import { FavoritesListModule } from './favorites-list/favorites-list.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user_45:khoa123456@cluster0.bwv88.mongodb.net/FUNITURE_API?retryWrites=true&w=majority',
    ),
    AuthModule,
    CartModule,
    BillModule,
    FavoritesListModule,
    UsersModule,
    ProductsModule,
    OrdersModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
