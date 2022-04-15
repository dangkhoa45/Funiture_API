import { Cart } from 'src/cart/schema/cart.schema';

export class CreateKhachHangDto {

  username: string;

  name: string;

  email: string;

  password: string;

  address: string;

  phone: string;

  avt: string;

  cart: Cart[];
}
