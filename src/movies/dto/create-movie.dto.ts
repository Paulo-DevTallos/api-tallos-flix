import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O plot trata-se da sinopse do filme. Recebe qualquer tipo texto',
    example: 'aqui é relatada toda história do filme',
  })
  plot: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Recebe os generos e seguimento do filme. Recebe uma lista com os generos do filme',
    example: "['drama', 'suspense', 'comedia']",
  })
  genres: [string];

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Se refere a todo tempo decorrido do filme. Recebe um tipo numérico',
    example: 8,
  })
  runtime: number;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Recebe os artistas que participaram do filme. Recebe uma lista de texto com os atores e atrizes do filme',
    example: "['Angelina Jolie', 'Adan Sndler', 'Jon Denver']",
  })
  cast: [string];

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Refere-se ao número de comentários relacionados ao filme. Recebe um tipo numérico',
    example: 2,
  })
  num_mflix_comments: number;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Refere-se ao poster do filme ou a sua capa. Recebe a URI de uma imagem',
  })
  poster: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Recebe o título do filme. Recebe qualquer tipo texto',
    example: 'O Senhor dos aneis, o Retorno do rei',
  })
  title: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O plot trata-se da sinopse completqa do filme. Recebe qualquer tipo texto',
    example: 'aqui é relatada toda história do filme',
  })
  fullplot: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Recebe os idiomas em que o filme está disponível. Recebe uma lista de texto com os idiomas',
    example: "['Inglês', 'Italiano', 'Espanhol']",
  })
  languages: [string];

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Recebe a data de lançamento do filme. Recebe uma data em formato de timestamp',
    example: /"1911-04-08T00:00:00.000+00:00"/,
  })
  released: Date;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Descreve todos os diretores das versões do filme. Recebe uma lista de texto',
    example: "['James Cameron', 'Steven Spielberg', 'Woody Allen']",
  })
  directors: [string];

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Descreve o(os) escritores do filme. Recebe uma lista de texto',
    example: "['Erin Gruwell', 'Woody Allen']",
  })
  writers: [string];

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Agrupa todos os prêmios que o filme já recebeu. Recebe uma estrutura de objeto',
    example: "{ Oscar: 2, nomanation: 0, text: '1 win' }",
  })
  awards: object;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Refere-se aos dados de ultima atualização do filme. Recebe um tipo texto com timestamp',
    example: "'2015-08-29 01:09:03.030000000'",
  })
  lastupdated: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Refere-se ao ano de lançamento do filme. Recebe um tipo numérico',
    example: 1997,
  })
  year: number;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Agrupa as avaliações em formato de votação. Recebe uma estrutura de Objeto numerico',
    // eslint-disable-next-line prettier/prettier
    example: "{ rating: 7, vote: 1034, id: 1737 }",
  })
  imdb: object;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Descreve os países onde o filme está disponível. Recebe uma lista de países',
    example: "['Brazil', 'Portgal', 'United States']",
  })
  countries: [string];

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Identifica o tipo do subgenero. Receb um tipo de texto qualquer',
    example: 'serie ou filme',
  })
  type: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Agrupa todas as criticas, visualizações e avalaiações sobre o filme. Recebe uma estrutura de objetos ',
    // eslint-disable-next-line prettier/prettier
    example: "{ rating: 9, numReviewers: 105, meter: 50 }, { lastUpdated: 'timeStamp'}",
  })
  tomatoes: object;
}
