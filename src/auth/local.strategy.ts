import { Strategy } from 'passport-local';

import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const khachHang = await this.authService.validateUser(username, password);
    if (!khachHang) {
      throw new UnauthorizedException();
    }
    return khachHang;
  }
}