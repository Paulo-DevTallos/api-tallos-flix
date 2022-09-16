import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @ApiProperty({
    // eslint-disable-next-line prettier/prettier
    description: 'Os campos de atualização de comentários seguem o mesmo padrão do CreateCommentsDto',
  })
  updateComment: CreateCommentDto;
}
