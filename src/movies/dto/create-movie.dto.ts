export class CreateMovieDto {
  id: string;
  plot: string;
  genres: [string];
  runtime: number;
  cast: [string];
  num_mflix_comments: number;
  poster: string;
  title: string;
  fullplot: string;
  languages: [string];
  released: Date;
  directors: [string];
  writers: [string];
  awards: object;
  lastupdated: string;
  year: number;
  imdb: object;
  countries: [string];
  type: string;
  tomatoes: object;
}
