import { Cart } from 'src/cart/schema/cart.schema';
import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

export class CreateBillDto {
  userName: KhachHangs;
  userAddress: KhachHangs;
  userEmail: KhachHangs;
  product: Cart[];
  status: string;
  createTime: Date;
}
