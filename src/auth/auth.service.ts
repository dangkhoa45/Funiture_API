import { KhachHangService } from 'src/khach-hang/khach-hang.service';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private khachHangService: KhachHangService,  private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const khachHang = await this.khachHangService.findByUsername(username);
      //console.log(khachHang);
      if (khachHang && khachHang.password === pass) {
        const { password, ...data } = khachHang.toObject();
        //console.log(data);
        return data;
      }
    return null;
  }

  async login(khachHang: any){  
    return {
      access_token: this.jwtService.sign(khachHang),
    };
  }
}
