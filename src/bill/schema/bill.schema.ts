import {
  SanPhams,
  SanPhamsSchema,
} from 'src/san-pham/schema/san-pham.schema';

import { Prop } from '@nestjs/mongoose';

export type BillDocument = Bill & Document;


export class Bill extends Document{
    @Prop()
    userName: string;

    @Prop()
    userEmail: string;

    @Prop()
    userAddress: string;

    @Prop({type: SanPhamsSchema})
    product : [SanPhams];
}
