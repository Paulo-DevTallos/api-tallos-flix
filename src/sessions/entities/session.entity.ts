import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type SessionDocument = Session & Document;

@Schema()
export class Session {
  @Prop()
  user_id: string;

  @Prop()
  jwt: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
