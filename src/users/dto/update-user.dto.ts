import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Os campos de atualização de comentários seguem o mesmo padrão do CreateUserDto',
  })
  updateComments: CreateUserDto;
}
