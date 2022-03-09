import { Test, TestingModule } from '@nestjs/testing';
import { KhachHangService } from './khach-hang.service';

describe('KhachHangService', () => {
  let service: KhachHangService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KhachHangService],
    }).compile();

    service = module.get<KhachHangService>(KhachHangService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
