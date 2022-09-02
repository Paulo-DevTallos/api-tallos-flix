import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'movies' })
  movie_id: string;

  @Prop()
  text: string;

  @Prop()
  date: Date;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
