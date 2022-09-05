import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TheatersDocument = Theaters & Document;

@Schema()
export class Theaters {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  movie_id: string;

  @Prop()
  text: string;

  @Prop()
  date: Date;
}

export const TheatersSchema = SchemaFactory.createForClass(Theaters);
