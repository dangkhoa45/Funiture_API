import { ProductsModule } from 'src/products/products.module';

import {
  forwardRef,
  Module,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FavoritesListController } from './favorites-list.controller';
import { FavoritesListService } from './favorites-list.service';
import {
  FavoritesList,
  FavoritesListSchema,
} from './schema/favorites-list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: FavoritesList.name, schema: FavoritesListSchema },
    ]),
    forwardRef(() => ProductsModule)
  ],
  controllers: [FavoritesListController],
  providers: [FavoritesListService],
  exports: [FavoritesListService]
})
export class FavoritesListModule { }
