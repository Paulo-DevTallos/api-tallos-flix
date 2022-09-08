import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto) {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Os campos de atualização de comentários seguem o mesmo padrão do CreateCommentsDto',
  })
  updateComments: CreateMovieDto;
}
