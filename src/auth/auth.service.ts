import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findInput(username);
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(user.password, salt);
    const validPass = await bcrypt.compare(pass, user.password);
    //console.log(khachHang);
    if (user && validPass === true) {
      //const { password, ...result } = khachHang;
      //console.log(result);
      const reqBody = {
        id: user._id,
        username: user.username,
        name: user.name,
        email: user.email,
        password: hash,
        address: user.address,
        phone: user.phone,
        avt: user.avt,
      };
      console.log(reqBody);
      return reqBody;
    }
    return null;
  }

  async login(user: any) {
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
