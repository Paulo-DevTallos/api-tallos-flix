import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  id: string;

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
  released: Date;

  @Prop()
  directors: [string];

  @Prop()
  writers: [string];

  @Prop()
  awards: {
    wins: number;
    nomination: number;
    text: string;
  };

  @Prop()
  lastupdated: string;

  @Prop()
  year: number;

  @Prop()
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };

  @Prop()
  countries: [string];

  @Prop()
  type: string;

  @Prop()
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    lastUpdated: Date;
  };
}

export const MoviesSchema = SchemaFactory.createForClass(Movie);
