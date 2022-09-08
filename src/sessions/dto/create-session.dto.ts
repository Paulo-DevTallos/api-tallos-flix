import { ApiProperty } from '@nestjs/swagger';

export class CreateSessionDto {
  id?: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O campo refenciado captura o e-mail do usuário como chave corelacionária',
    example: 'usuario@email.com',
  })
  user_id: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O campo refenciado captura o token gerado na sessão para validar o login do usuário',
  })
  jwt: string;
}
