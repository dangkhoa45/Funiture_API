import { PartialType } from '@nestjs/swagger';

import { Cart } from '../schema/cart.schema';

export class UpdateCartDto extends PartialType(Cart) {}
