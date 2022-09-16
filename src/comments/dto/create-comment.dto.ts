import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsDateString } from 'class-validator';

export class CreateCommentDto {
  id?: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O nome é utilizado para identificar o usuário que cria o comentário',
    example: 'Qualquer texto digitável - (Paulo Sérgio, paulo sergio)',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O campo email idenfica o e-mail do usuário que escreve o comentário',
    example: 'usuario@email.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Id relacional da collection de movies trás todo os campos do filme referente ao comentário',
    example: '573a1390f29313caabcd421',
  })
  @IsString()
  movie_id: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Refere-se ao comentário em si. Qualquer texto digitável',
    example: 'usuario@email.com',
  })
  @IsNotEmpty()
  @IsString()
  text: string;

  @ApiProperty({
    description: 'data que o comentario foi feito',
    example: '1983-04-27T20:39:15.000+00:00',
  })
  @IsDateString()
  date: Date;
}
