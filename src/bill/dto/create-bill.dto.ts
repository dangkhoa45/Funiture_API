import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';
import { SanPhams } from 'src/san-pham/schema/san-pham.schema';

export class CreateBillDto {
  userName: KhachHangs;
  userAddress: KhachHangs;
  userEmail: KhachHangs;
  product: SanPhams[];
  status: string;
  createTime: Date;
}
