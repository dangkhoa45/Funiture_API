import { Test, TestingModule } from '@nestjs/testing';
import { FavoritesListController } from './favorites-list.controller';
import { FavoritesListService } from './favorites-list.service';

describe('FavoritesListController', () => {
  let controller: FavoritesListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesListController],
      providers: [FavoritesListService],
    }).compile();

    controller = module.get<FavoritesListController>(FavoritesListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
