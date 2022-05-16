import { PartialType } from '@nestjs/swagger';
import { CreateFavoritesListDto } from './create-favorites-list.dto';

export class UpdateFavoritesListDto extends PartialType(CreateFavoritesListDto) {}
