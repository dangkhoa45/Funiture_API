import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

export class CreateCartDto {
  createUser: KhachHangs;

  productId: string;

  title: string;

  quantity: string;

  price: string;

  item: number;

  createAt: Date;
}
