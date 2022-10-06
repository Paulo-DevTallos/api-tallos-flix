import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class Comments {
  id?: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'movies' })
  movie_id: string;

  @Prop()
  text: string;

  @Prop({ type: Date, default: Date.now })
  date: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
