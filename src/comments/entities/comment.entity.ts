import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CommentsDocument = Comments & Document;

@Schema()
export class User {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
