import {
    NextFunction,
    Request,
    Response,
  } from 'express';
  
  import {
    HttpException,
    HttpStatus,
    Injectable,
    NestMiddleware,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { KhachHangService } from 'src/khach-hang/khach-hang.service';
  

  
  interface UserRequest extends Request {
      user: any
  }
  
  @Injectable()
  export class isAuthenticated implements NestMiddleware {
      constructor(private readonly jwt: JwtService, private readonly khachHangService: KhachHangService) { }
      async use(req: UserRequest, res: Response, next: NextFunction) {
          try{
  
              if (
                  req.headers.authorization &&
                  req.headers.authorization.startsWith('Bearer')
              ) {
                  const token = req.headers.authorization.split(' ')[1];
                  const decoded = await this.jwt.verify(token);
                  const user = await this.khachHangService.getOne(decoded.email)
                  if (user) {
                      req.user = user
                      next()
                  } else {
                      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
  
                  }
              } else {
                  throw new HttpException('No token found', HttpStatus.NOT_FOUND)
  
              }
          }catch {
           throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED)
         }
      }
  }