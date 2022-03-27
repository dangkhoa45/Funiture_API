import { KhachHangService } from 'src/khach-hang/khach-hang.service';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

  
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private khachHangService: KhachHangService,  private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
      const khachHang = await this.khachHangService.findByUsername(username);
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(khachHang.password,salt);
      //console.log(khachHang);
      if (khachHang && khachHang.password === pass) {
        //const { password, ...result } = khachHang;
        //console.log(result);
        const reqBody = {
          username: khachHang.username,
          email: khachHang.email,
          password: hash,
          address: khachHang.address,
          phone: khachHang.phone,
        }
        console.log(reqBody);
        return reqBody;
      }
    return null;
  }

  async login(khachHang: any){  
    return {
      access_token: this.jwtService.sign(khachHang),
    };
  }
}
