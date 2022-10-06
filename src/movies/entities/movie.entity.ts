import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Movies } from '../interface/IMovies';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  id?: string;

  @Prop()
  plot: string;

  @Prop()
  genres: [string];

  @Prop()
  runtime: number;

  @Prop()
  cast: [string];

  @Prop()
  num_mflix_comments: number;

  @Prop()
  poster: string;

  @Prop()
  title: string;

  @Prop()
  fullplot: string;

  @Prop()
  languages: [string];

  @Prop()
  released: string;

  @Prop()
  directors: [string];

  @Prop()
  writers: [string];

  @Prop({ type: Object })
  awards: Movies['Awards'];

  @Prop()
  lastupdated: string;

  @Prop()
  year: number;

  @Prop({ type: Object })
  imdb: Movies['Imdb'];

  @Prop()
  countries: [string];

  @Prop()
  type: string;

  @Prop({ type: Object })
  tomatoes: Movies['Tomatoes'];
}

export const MoviesSchema = SchemaFactory.createForClass(Movie);
