import { Cart } from 'src/cart/schema/cart.schema';
import { User } from 'src/users/schema/users.schema';

export class CreateBillDto {
  userName: User;
  userAddress: User;
  userEmail: User;
  userPhone: User;
  product: Cart[];
  transport: string;
  createTime: Date;
}
