import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post('POST')
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get('GET')
  findAll() {
    return this.commentsService.findAll();
  }

  @Get('GET/:id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch('PATCH/:id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete('DELETE/:id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
