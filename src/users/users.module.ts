import { CartModule } from 'src/cart/cart.module';

import {
  forwardRef,
  Module,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {
  User,
  UserSchema,
} from './schema/user.schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => CartModule)
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule { }
