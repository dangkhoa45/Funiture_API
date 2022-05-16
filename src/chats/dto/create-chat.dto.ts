import { KhachHangs } from 'src/khach-hang/schema/khach-hang.schema';

export class CreateChatDto {
  message: string;
  sendBy: KhachHangs;
  time: Date;
}
