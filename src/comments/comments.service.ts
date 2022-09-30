import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comments } from './entities/comment.entity';
import { InjectModel } from '@nestjs/mongoose/dist';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comments.name)
    private readonly commentsModel: Model<CreateCommentDto>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = await this.commentsModel.create(createCommentDto);

    return newComment;
  }

  async findAll() {
    return await this.commentsModel.find().limit(10);
  }

  async findOne(id: string) {
    return await this.commentsModel.findById({ _id: id });
  }

  async update(id: string, updateComment: UpdateCommentDto) {
    console.log(updateComment);
    return await this.commentsModel.findOneAndUpdate(
      { _id: id },
      { $set: updateComment },
      { new: true },
    );
  }

  async remove(id: string) {
    return await this.commentsModel.deleteOne({ _id: id }).exec();
  }
}
