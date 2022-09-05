import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class User {
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
  date: { type: Date };
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
