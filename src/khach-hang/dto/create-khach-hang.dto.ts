import { Type } from 'class-transformer';
import { IsArray } from 'class-validator';
import { Cart } from 'src/cart/schema/cart.schema';

export class CreateKhachHangDto {

  username: string;

  name: string;

  email: string;

  password: string;

  address: string;

  phone: string;

  avt: string;

  @IsArray()
  @Type(() => Cart)
  cart: Cart[];
}
