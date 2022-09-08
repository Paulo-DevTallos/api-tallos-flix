import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  _id?: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O nome é utilizado para identificar o usuário com acesso ao sistema',
    example: 'Qualquer texto digitável - (Paulo Sérgio, paulo sergio)',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'O email é utilizado para identificar um usuário com acesso ao sistema e para campos de buscas',
    example: 'usuario@email.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'A senha autentica um usuário cadastrado a ter acesso ao sistema',
    example: 'tipos strings de texto 123456assdfsdfsc¨&/$%-%"!@',
  })
  @IsString()
  password: string;
}
