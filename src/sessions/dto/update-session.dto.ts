import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSessionDto } from './create-session.dto';

export class UpdateSessionDto extends PartialType(CreateSessionDto) {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Os campos de atualização de sessão seguem o mesmo padrão do CreateSessionDto',
  })
  updateSession: CreateSessionDto;
}
