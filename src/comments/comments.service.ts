import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private readonly commentsModel: Model<CreateCommentDto>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return this.commentsModel.find();
  }

  findOne(id: string) {
    return this.commentsModel.findById({ _id: id });
  }

  update(id: string, updateComment: UpdateCommentDto) {
    return this.commentsModel.findByIdAndUpdate(
      { _id: id },
      { $set: updateComment },
      { new: true },
    );
  }

  remove(id: string) {
    return `This action removes a #${id} comment`;
  }
}
