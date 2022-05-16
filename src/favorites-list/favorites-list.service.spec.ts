import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesListService } from './favorites-list.service';

describe('FavoritesListService', () => {
  let service: FavoritesListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoritesListService],
    }).compile();

    service = module.get<FavoritesListService>(FavoritesListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
