import { Test, TestingModule } from '@nestjs/testing';
import { KhachHangController } from './khach-hang.controller';
import { KhachHangService } from './khach-hang.service';

describe('KhachHangController', () => {
  let controller: KhachHangController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KhachHangController],
      providers: [KhachHangService],
    }).compile();

    controller = module.get<KhachHangController>(KhachHangController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
