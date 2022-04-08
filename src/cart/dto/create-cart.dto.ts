import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

export class CreateCartDto {

  createUser: KhachHangs;
  title: string;
  quantity: string;
  price: string;
}
