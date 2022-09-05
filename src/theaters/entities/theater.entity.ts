import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITheaters } from '../interface/ITheaters';

export type TheatersDocument = Theaters & Document;

@Schema()
export class Theaters {
  @Prop()
  id: string;

  @Prop()
  theaterId: number;

  @Prop({ type: Object })
  location: ITheaters;
}

export const TheatersSchema = SchemaFactory.createForClass(Theaters);
